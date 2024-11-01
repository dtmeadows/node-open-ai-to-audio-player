import 'typings-global';
import plugins = require('./beautylog.plugins');
export interface IFigletOptions {
    font?: string;
    color?: plugins.beautycolor.TColorName;
    cb?: any;
}
export declare let figlet: (textArg: string, optionsArg?: any) => Promise<{}>;
export declare let figletSync: (textArg: string, optionsArg?: IFigletOptions) => boolean;
