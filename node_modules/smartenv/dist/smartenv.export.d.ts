import * as classes from './smartenv.classes.environment';
/**
 * returns the environment
 * @returns {Environment}
 */
export declare let getEnv: () => classes.Environment;
/**
 * prints the environment to console
 */
export declare let printEnv: () => void;
export interface IEnvObject {
    name: string;
    value: string;
}
export declare let getEnvVars: (regexArg: RegExp) => Promise<IEnvObject[]>;
