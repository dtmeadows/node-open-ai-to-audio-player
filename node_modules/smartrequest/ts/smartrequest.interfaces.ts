import * as plugins from './smartrequest.plugins';
import * as https from 'https';

export interface ISmartRequestOptions extends https.RequestOptions {
  requestBody?: any;
}
