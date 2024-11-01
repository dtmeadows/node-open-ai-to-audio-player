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
const classes = require("./smartenv.classes.environment");
const objectStorage = require("./smartenv.objectstorage");
let environment = null;
/**
 * returns the environment
 * @returns {Environment}
 */
exports.getEnv = function () {
    if (!environment) {
        environment = new classes.Environment();
    }
    ;
    return environment;
};
/**
 * prints the environment to console
 */
exports.printEnv = function () {
    if (this.getEnv().isNode) {
        console.log('running on NODE');
        let smartenvVersion = require('../package.json').version;
        console.log('node version is ' + this.getEnv().nodeVersion + ' and smartenv version is ' + smartenvVersion);
    }
    else {
        console.log('running on BROWSER');
        console.log('browser is ' + this.getEnv().userAgent);
    }
    console.log('the smartenv registration store currently holds the following properties:');
    console.log(Object.getOwnPropertyNames(objectStorage.obs.getAll()));
};
exports.getEnvVars = (regexArg) => __awaiter(this, void 0, void 0, function* () {
    let resultArray = [];
    for (let key in process.env) {
        if (regexArg.test(key)) {
            resultArray.push({
                name: key,
                value: process.env[key]
            });
        }
    }
    return resultArray;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRlbnYuZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSwwREFBeUQ7QUFDekQsMERBQXlEO0FBR3pELElBQUksV0FBVyxHQUF3QixJQUFJLENBQUE7QUFFM0M7OztHQUdHO0FBQ1EsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUE7QUFDcEIsQ0FBQyxDQUFBO0FBSUQ7O0dBRUc7QUFDUSxRQUFBLFFBQVEsR0FBRztJQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFBO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsR0FBRywyQkFBMkIsR0FBRyxlQUFlLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUE7SUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDckUsQ0FBQyxDQUFBO0FBT1UsUUFBQSxVQUFVLEdBQUcsQ0FBTyxRQUFnQjtJQUM3QyxJQUFJLFdBQVcsR0FBaUIsRUFBRSxDQUFBO0lBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQTtBQUNwQixDQUFDLENBQUEsQ0FBQSJ9