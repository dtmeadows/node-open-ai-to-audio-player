"use strict";
// import all the stuff we need
const plugins = require("./tsn.plugins");
var typescript_1 = require("typescript");
exports.ScriptTarget = typescript_1.ScriptTarget;
exports.ModuleKind = typescript_1.ModuleKind;
/**
 * the default typescript compilerOptions
 */
let compilerOptionsDefault = {
    declaration: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    inlineSourceMap: true,
    noEmitOnError: false,
    module: plugins.typescript.ModuleKind.CommonJS,
    noImplicitAny: false,
    target: plugins.typescript.ScriptTarget.ES2015
};
/**
 * merges compilerOptions
 */
let mergeCompilerOptions = function (customTsOptions, outDirArg) {
    // create merged options 
    let mergedOptions = {}; // create base 
    plugins.lodash.merge(// create final options
    mergedOptions, // things get merged into first object
    compilerOptionsDefault, customTsOptions, { outDir: outDirArg });
    return mergedOptions;
};
/**
 * the internal main compiler function that compiles the files
 */
let compiler = (fileNames, options) => {
    let done = plugins.q.defer();
    let program = plugins.typescript.createProgram(fileNames, options);
    let emitResult = program.emit();
    let allDiagnostics = plugins.typescript.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    try {
        allDiagnostics.forEach((diagnostic) => {
            let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            let message = plugins.typescript.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
            console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
        });
    }
    catch (err) {
        console.log(allDiagnostics);
    }
    let exitCode = emitResult.emitSkipped ? 1 : 0;
    if (exitCode === 0) {
        plugins.beautylog.ok('TypeScript emit succeeded!');
        done.resolve();
    }
    else {
        plugins.beautylog.error('TypeScript emit failed. Please investigate!');
        process.exit(exitCode);
    }
    return done.promise;
};
/**
 * compile am array of absolute file paths
 */
exports.compileFileArray = (fileStringArrayArg, destDir, compilerOptionsArg = {}) => {
    plugins.beautylog.info('checking files before compilation');
    return compiler(fileStringArrayArg, mergeCompilerOptions(compilerOptionsArg, destDir)); // return the promise from compiler()
};
/**
 * compile advanced glob configurations
 * @param globStringArrayArg a array of glob strings
 * {
 *     './some/origin/folder/**\/*.ts': './some/destination/folder'
 * }
 */
exports.compileGlobStringObject = (globStringObjectArg, tsOptionsArg = {}, cwdArg = process.cwd()) => {
    let done = plugins.q.defer();
    let promiseArray = [];
    for (let keyArg in globStringObjectArg) {
        let cycleDone = plugins.q.defer();
        promiseArray.push(cycleDone.promise);
        plugins.beautylog.info(`TypeScript assignment: transpile from ${keyArg} to ${globStringObjectArg[keyArg]}`);
        plugins.smartfile.fs.listFileTree(cwdArg, keyArg)
            .then((filesToConvertArg) => {
            let absoluteFilePathArray = plugins.smartpath.transform.toAbsolute(filesToConvertArg, cwdArg);
            let destDir = plugins.smartpath.transform.toAbsolute(globStringObjectArg[keyArg], cwdArg);
            return exports.compileFileArray(absoluteFilePathArray, destDir, tsOptionsArg);
        }, (err) => {
            console.log(err);
        })
            .then(cycleDone.resolve).catch(err => { console.log(err); });
    }
    Promise.all(promiseArray).then(() => { done.resolve(); });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNuLmNvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90c24uY29tcGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQStCO0FBQy9CLHlDQUF3QztBQUV4Qyx5Q0FBc0U7QUFBNUMsb0NBQUEsWUFBWSxDQUFBO0FBQUUsa0NBQUEsVUFBVSxDQUFBO0FBRWxEOztHQUVHO0FBQ0gsSUFBSSxzQkFBc0IsR0FBb0I7SUFDMUMsV0FBVyxFQUFFLElBQUk7SUFDakIscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRO0lBQzlDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNO0NBQ2pELENBQUE7QUFFRDs7R0FFRztBQUNILElBQUksb0JBQW9CLEdBQUcsVUFBVSxlQUFnQyxFQUFFLFNBQWlCO0lBQ3BGLHlCQUF5QjtJQUN6QixJQUFJLGFBQWEsR0FBb0IsRUFBRSxDQUFBLENBQUMsZUFBZTtJQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSx1QkFBdUI7SUFDekMsYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUN4QixDQUFBO0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQTtBQUN4QixDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNILElBQUksUUFBUSxHQUFHLENBQUMsU0FBbUIsRUFBRSxPQUEyQztJQUM1RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUSxDQUFBO0lBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENB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