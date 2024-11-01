/// <reference types="node" />
import * as https from 'https';
export interface ISmartRequestOptions extends https.RequestOptions {
    requestBody?: any;
}
