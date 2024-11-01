// import all the stuff we need
import * as plugins from './tsn.plugins'
import { CompilerOptions } from 'typescript'
export { CompilerOptions, ScriptTarget, ModuleKind } from 'typescript'

/**
 * the default typescript compilerOptions
 */
let compilerOptionsDefault: CompilerOptions = {
    declaration: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    inlineSourceMap: true,
    noEmitOnError: false,
    module: plugins.typescript.ModuleKind.CommonJS,
    noImplicitAny: false,
    target: plugins.typescript.ScriptTarget.ES2015
}

/**
 * merges compilerOptions
 */
let mergeCompilerOptions = function (customTsOptions: CompilerOptions, outDirArg: string): CompilerOptions {
    // create merged options 
    let mergedOptions: CompilerOptions = {} // create base 
    plugins.lodash.merge( // create final options
        mergedOptions, // things get merged into first object
        compilerOptionsDefault,
        customTsOptions,
        { outDir: outDirArg }
    )

    return mergedOptions
}

/**
 * the internal main compiler function that compiles the files
 */
let compiler = (fileNames: string[], options: plugins.typescript.CompilerOptions): Promise<void> => {
    let done = plugins.q.defer<void>()
    let program = plugins.typescript.createProgram(fileNames, options)
    let emitResult = program.emit()

    let allDiagnostics = plugins.typescript.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)
    try {
        allDiagnostics.forEach((diagnostic) => {
            let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
            let message = plugins.typescript.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
            console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
        })
    } catch (err) {
        console.log(allDiagnostics)
    }

    let exitCode = emitResult.emitSkipped ? 1 : 0
    if (exitCode === 0) {
        plugins.beautylog.ok('TypeScript emit succeeded!')
        done.resolve()
    } else {
        plugins.beautylog.error('TypeScript emit failed. Please investigate!')
        process.exit(exitCode)
    }

    return done.promise
}

/**
 * compile am array of absolute file paths
 */
export let compileFileArray = (
    fileStringArrayArg: string[],
    destDir: string,
    compilerOptionsArg: CompilerOptions = {}
): Promise<void> => {
    plugins.beautylog.info('checking files before compilation')
    return compiler(
        fileStringArrayArg,
        mergeCompilerOptions(compilerOptionsArg, destDir)
    ) // return the promise from compiler()
}

/**
 * compile advanced glob configurations
 * @param globStringArrayArg a array of glob strings
 * {
 *     './some/origin/folder/**\/*.ts': './some/destination/folder'
 * }
 */
export let compileGlobStringObject = (
    globStringObjectArg: any,
    tsOptionsArg: CompilerOptions = {},
    cwdArg: string = process.cwd()
) => {
    let done = plugins.q.defer<void>()
    let promiseArray: Promise<void>[] = []
    for (let keyArg in globStringObjectArg) {
        let cycleDone = plugins.q.defer<void>()
        promiseArray.push(cycleDone.promise)
        plugins.beautylog.info(
            `TypeScript assignment: transpile from ${keyArg} to ${globStringObjectArg[keyArg]}`
        )
        plugins.smartfile.fs.listFileTree(cwdArg, keyArg)
            .then(
            (filesToConvertArg: string[]) => {
                let absoluteFilePathArray: string[] = plugins.smartpath.transform.toAbsolute(
                    filesToConvertArg,
                    cwdArg
                )
                let destDir: string = plugins.smartpath.transform.toAbsolute(
                    globStringObjectArg[keyArg],
                    cwdArg
                )
                return compileFileArray(
                    absoluteFilePathArray,
                    destDir,
                    tsOptionsArg
                )
            },
            (err) => {
                console.log(err)
            })
            .then(cycleDone.resolve).catch(err => { console.log(err) })
    }
    Promise.all<void>(promiseArray).then(() => { done.resolve() })
    return done.promise
}
