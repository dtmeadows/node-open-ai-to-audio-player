"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartrequest.plugins");
;
let buildResponse = (incomingMessageArg) => {
    let done = plugins.smartq.defer();
    // Continuously update stream with data
    let body = '';
    incomingMessageArg.on('data', function (chunkArg) {
        body += chunkArg;
    });
    incomingMessageArg.on('end', function () {
        try {
            incomingMessageArg.body = JSON.parse(body);
        }
        catch (err) {
            incomingMessageArg.body = body;
        }
        done.resolve(incomingMessageArg);
    });
    return done.promise;
};
exports.request = (domainArg, optionsArg = {}, streamArg = false) => __awaiter(this, void 0, void 0, function* () {
    let done = plugins.smartq.defer();
    let parsedUrl;
    if (domainArg) {
        parsedUrl = plugins.url.parse(domainArg);
        optionsArg.hostname = parsedUrl.hostname;
        if (parsedUrl.port) {
            optionsArg.port = parseInt(parsedUrl.port);
        }
        optionsArg.path = parsedUrl.path;
    }
    if (!parsedUrl || parsedUrl.protocol === 'https:') {
        let request = plugins.https.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response);
            }
            else {
                buildResponse(response).then(done.resolve);
            }
        });
        if (optionsArg.requestBody) {
            if (typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
            }
            request.write(optionsArg.requestBody);
        }
        request.on('error', e => {
            console.error(e);
        });
        request.end();
    }
    else if (parsedUrl.protocol === 'http:') {
        let request = plugins.http.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response);
            }
            else {
                buildResponse(response).then(done.resolve);
            }
        });
        if (optionsArg.requestBody) {
            if (typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
            }
            request.write(optionsArg.requestBody);
        }
        request.on('error', e => {
            console.error(e);
        });
        request.end();
    }
    else {
        throw new Error(`unsupported protocol: ${parsedUrl.protocol}`);
    }
    return done.promise;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0LnJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHJlcXVlc3QucmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esa0RBQWtEO0FBT2pELENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxDQUFDLGtCQUFtQyxFQUFvQyxFQUFFO0lBQzVGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUEyQixDQUFDO0lBQzNELHVDQUF1QztJQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVMsUUFBUTtRQUM3QyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUMzQixJQUFJO1lBQ0Qsa0JBQThDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNYLGtCQUE4QyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUE2QyxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsQ0FDbkIsU0FBaUIsRUFDakIsYUFBOEMsRUFBRSxFQUNoRCxZQUFxQixLQUFLLEVBQ1EsRUFBRTtJQUNwQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBTyxDQUFDO0lBQ3ZDLElBQUksU0FBMEIsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRTtRQUNiLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtB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