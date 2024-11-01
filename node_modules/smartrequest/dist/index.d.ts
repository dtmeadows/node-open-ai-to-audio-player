import * as interfaces from './smartrequest.interfaces';
import { extendedIncomingMessage } from './smartrequest.request';
export { request, extendedIncomingMessage } from './smartrequest.request';
export { ISmartRequestOptions } from './smartrequest.interfaces';
export declare let get: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<extendedIncomingMessage>;
export declare let getBinary: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<extendedIncomingMessage>;
export declare let post: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<extendedIncomingMessage>;
export declare let put: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<extendedIncomingMessage>;
export declare let del: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<extendedIncomingMessage>;
