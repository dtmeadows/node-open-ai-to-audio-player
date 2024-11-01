/// <reference types="node" />
import * as interfaces from './smartrequest.interfaces';
import { IncomingMessage } from 'http';
export interface extendedIncomingMessage extends IncomingMessage {
    body: any;
}
export declare let request: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions, streamArg?: boolean) => Promise<extendedIncomingMessage>;
