export interface ILogMethod {
    (logType: string, logMessage: string): void;
}
export interface IBeautyRemote {
    log: ILogMethod;
}
export declare let remoteArray: IBeautyRemote[];
export declare let remoteLog: (logType: string, logMessage: string) => void;
