/// <reference types="node" />
import * as plugins from './smartfile.plugins';
export interface ISmartfileConstructorOptions {
    path?: string;
    contentString?: string;
    contentBuffer?: Buffer;
    base?: string;
}
/**
 * class Smartfile
 * -> is vinyl file compatible
 */
export declare class Smartfile {
    /**
     * the full path of the file on disk
     */
    path: string;
    /**
     *
     */
    parsedPath: plugins.path.ParsedPath;
    /**
     * the content of the file as Buffer
     */
    contentBuffer: Buffer;
    /**
     * The current working directory of the file
     * Note:this is similar to gulp and different from native node path base
     */
    base: string;
    /**
     * sync the file with disk
     */
    sync: boolean;
    /**
     * the constructor of Smartfile
     * @param optionsArg
     */
    constructor(optionsArg: ISmartfileConstructorOptions);
    /**
     * set contents from string
     * @param contentString
     */
    setContentsFromString(contentString: string): void;
    /**
     * write file to disk
     * Behaviours:
     * - no argument write to exactly where the file was picked up
     */
    write(pathArg?: string): Promise<void>;
    /**
     * read file from disk
     */
    read(): Promise<void>;
    /**
     * vinyl-compatibility: alias of this.contentBuffer
     */
    contents: Buffer;
    /**
     * vinyl-compatibility
     */
    readonly cwd: string;
    /**
     * return relative path of file
     */
    readonly relative: string;
    /**
     * return truw when the file has content
     */
    isNull(): boolean;
    /**
     * return true if contents are Buffer
     */
    isBuffer(): boolean;
    isDirectory(): boolean;
    isStream(): boolean;
    isSymbolic(): boolean;
    updateFileName(fileNameArg: string): void;
}
