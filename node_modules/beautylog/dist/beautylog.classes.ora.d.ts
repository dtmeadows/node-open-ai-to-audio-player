import 'typings-global';
export declare let oraActive: boolean;
export declare let activeOra: Ora;
export declare class Ora {
    state: string;
    private _oraObject;
    constructor(textArg: string, colorArg: string, startArg?: boolean);
    text(textArg: any): void;
    start(textArg?: string, colorArg?: string): void;
    end(): void;
    endOk(textArg: any): void;
    endError(textArg: any): void;
    pause(): void;
    stop(): void;
}
export declare let ora: Ora;
