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
const util = require("util");
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            this.status = 'pending';
        });
    }
}
exports.Deferred = Deferred;
exports.defer = () => {
    return new Deferred();
};
/**
 * Creates a new resolved promise for the provided value.
 */
exports.resolvedPromise = (value) => {
    return Promise.resolve(value);
};
/**
 * Creates a new rejected promise for the provided reason.
 */
exports.rejectedPromise = err => {
    return Promise.reject(err);
};
exports.promisify = util.promisify;
// polyfill
if (!exports.promisify) {
    exports.promisify = require('util.promisify');
}
exports.map = (inputArg, functionArg) => __awaiter(this, void 0, void 0, function* () {
    let promisifedFunction = exports.promisify(functionArg);
    let promiseArray = [];
    let resultArray = [];
    for (let item of inputArg) {
        let promise = promisifedFunction(item);
        promiseArray.push(promise);
        promise.then(x => {
            resultArray.push(x);
        });
    }
    yield Promise.all(promiseArray);
    return resultArray;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBWTdCO0lBS0U7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBWkQsNEJBWUM7QUFFVSxRQUFBLEtBQUssR0FBRyxHQUFNLEVBQUU7SUFDekIsTUFBTSxDQUFDLElBQUksUUFBUSxFQUFLLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLGVBQWUsR0FBRyxDQUFJLEtBQVMsRUFBYyxFQUFFO0lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBQ1EsUUFBQSxlQUFlLEdBQUcsR0FBRyxDQUFDLEVBQUU7SUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUV0QyxXQUFXO0FBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLENBQUMsQ0FBQztJQUNmLGlCQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUNVLFFBQUEsR0FBRyxHQUFHLENBQVUsUUFBYSxFQUFFLFdBQVcsRUFBRSxFQUFFO0lBQ3ZELElBQUksa0JBQWtCLEdBQUcsaUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxJQUFJLFlBQVksR0FBbUIsRUFBRSxDQUFDO0lBQ3RDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFpQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQSxDQUFDIn0=