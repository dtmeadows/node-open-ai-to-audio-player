import 'typings-global';
/**
 * all the color names that are available for proper xterm translation
 */
export declare type TColorName = 'black' | 'blue' | 'brown' | 'cyan' | 'green' | 'orange' | 'pink' | 'red' | 'white';
export interface IRGB {
    r: number;
    b: number;
    g: number;
}
/**
 * color a string with xterm
 */
export declare let coloredString: (stringArg: string, colorFontArg: TColorName, colorBackgroundArg?: TColorName) => string;
