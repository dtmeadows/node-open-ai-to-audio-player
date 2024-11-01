import * as plugins from './tsn.plugins';
export { CompilerOptions, ScriptTarget, ModuleKind } from 'typescript';
/**
 * compile am array of absolute file paths
 */
export declare let compileFileArray: (fileStringArrayArg: string[], destDir: string, compilerOptionsArg?: plugins.typescript.CompilerOptions) => Promise<void>;
/**
 * compile advanced glob configurations
 * @param globStringArrayArg a array of glob strings
 * {
 *     './some/origin/folder/**\/*.ts': './some/destination/folder'
 * }
 */
export declare let compileGlobStringObject: (globStringObjectArg: any, tsOptionsArg?: plugins.typescript.CompilerOptions, cwdArg?: string) => Promise<void>;
