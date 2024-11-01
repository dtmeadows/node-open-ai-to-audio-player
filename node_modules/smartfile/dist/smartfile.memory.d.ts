import { Smartfile } from './smartfile.classes.smartfile';
/**
 * converts file to Object
 * @param fileStringArg
 * @param fileTypeArg
 * @returns {any|any}
 */
export declare let toObject: (fileStringArg: string, fileTypeArg: string) => any;
export interface IToFsOptions {
    respectRelative?: boolean;
}
/**
 * writes string or Smartfile to disk.
 * @param fileArg
 * @param fileNameArg
 * @param fileBaseArg
 */
export declare let toFs: (fileContentArg: string | Smartfile, filePathArg: any, optionsArg?: IToFsOptions) => Promise<{}>;
/**
 * writes a string or a Smartfile to disk synchronously, only supports string
 * @param fileArg
 * @param filePathArg
 */
export declare let toFsSync: (fileArg: string, filePathArg: string) => void;
export declare let smartfileArrayToFs: (smartfileArrayArg: Smartfile[], dirArg: string) => Promise<void>;
