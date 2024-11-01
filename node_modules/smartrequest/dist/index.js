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
const smartrequest_request_1 = require("./smartrequest.request");
var smartrequest_request_2 = require("./smartrequest.request");
exports.request = smartrequest_request_2.request;
exports.get = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'GET';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.getBinary = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    const done = plugins.smartq.defer();
    const response = yield smartrequest_request_1.request(domainArg, optionsArg, true);
    var data = [];
    response.on('data', function (chunk) {
        data.push(chunk);
    }).on('end', function () {
        //at this point data is an array of Buffers
        //so Buffer.concat() can make us a new Buffer
        //of all of them together
        const buffer = Buffer.concat(data);
        response.body = buffer.toString('binary');
        done.resolve();
    });
    yield done.promise;
    return response;
});
exports.post = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'POST';
    if (typeof optionsArg.requestBody === 'object' &&
        (!optionsArg.headers || !optionsArg.headers['Content-Type'])) {
        // make sure headers exist
        if (!optionsArg.headers) {
            optionsArg.headers = {};
        }
        // assign the right Content-Type, leaving all other headers in place
        Object.assign(optionsArg.headers, {
            'Content-Type': 'application/json'
        });
    }
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.put = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'PUT';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.del = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'DELETE';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsa0RBQWtEO0FBR2xELGlFQUEwRTtBQUUxRSwrREFBMEU7QUFBakUseUNBQUEsT0FBTyxDQUFBO0FBR0wsUUFBQSxHQUFHLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQzdGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUM7QUFFUyxRQUFBLFNBQVMsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDbkcsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFFZCxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFTLEtBQUs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ1QsMkNBQTJDO1FBQzNDLDZDQUE2QztRQUM3Qyx5QkFBeUI7UUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25CLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQzlGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzNCLElBQ0UsT0FBTyxVQUFVLENBQUMsV0FBVyxLQUFLLFFBQVE7UUFDMUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQzVEO1FBQ0EsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsb0VBQW9FO1FBQ3BFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUEsQ0FBQztBQUVTLFFBQUEsR0FBRyxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFLEVBQUUsRUFBRTtJQUM3RixVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFDO0FBRVMsUUFBQSxHQUFHLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQzdGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzdCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUMifQ==