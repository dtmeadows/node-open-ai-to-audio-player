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
const plugins = require("./smartfile.plugins");
const smartfile_classes_smartfile_1 = require("./smartfile.classes.smartfile");
const smartfileFs = require("./smartfile.fs");
const SmartfileInterpreter = require("./smartfile.interpreter");
/**
 * converts file to Object
 * @param fileStringArg
 * @param fileTypeArg
 * @returns {any|any}
 */
exports.toObject = function (fileStringArg, fileTypeArg) {
    return SmartfileInterpreter.objectFile(fileStringArg, fileTypeArg);
};
/**
 * writes string or Smartfile to disk.
 * @param fileArg
 * @param fileNameArg
 * @param fileBaseArg
 */
exports.toFs = (fileContentArg, filePathArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    let done = plugins.q.defer();
    // check args
    if (!fileContentArg || !filePathArg) {
        throw new Error('expected valid arguments');
    }
    // prepare actual write action
    let fileString;
    let filePath = filePathArg;
    // handle Smartfile
    if (fileContentArg instanceof smartfile_classes_smartfile_1.Smartfile) {
        let fileContentArg2 = fileContentArg;
        fileString = fileContentArg.contentBuffer.toString();
        // handle options
        if (optionsArg.respectRelative) {
            filePath = plugins.path.join(filePath, fileContentArg.path);
        }
    }
    else if (typeof fileContentArg === 'string') {
        fileString = fileContentArg;
    }
    else {
        throw new Error('fileContent is neither string nor Smartfile');
    }
    yield smartfileFs.ensureDir(plugins.path.parse(filePath).dir);
    plugins.fsExtra.writeFile(filePath, fileString, { encoding: 'utf8' }, done.resolve);
    return yield done.promise;
});
/**
 * writes a string or a Smartfile to disk synchronously, only supports string
 * @param fileArg
 * @param filePathArg
 */
exports.toFsSync = function (fileArg, filePathArg) {
    // function checks to abort if needed
    if (!fileArg || !filePathArg) {
        throw new Error('expected a valid arguments');
    }
    // prepare actual write action
    let fileString;
    let filePath = filePathArg;
    if (typeof fileArg !== 'string') {
        throw new Error('fileArg is not of type String.');
    }
    else if (typeof fileArg === 'string') {
        fileString = fileArg;
    }
    plugins.fsExtra.writeFileSync(filePath, fileString, { encoding: 'utf8' });
};
exports.smartfileArrayToFs = (smartfileArrayArg, dirArg) => __awaiter(this, void 0, void 0, function* () {
    yield smartfileFs.ensureDir(dirArg);
    for (let smartfile of smartfileArrayArg) {
        yield exports.toFs(smartfile, dirArg, {
            respectRelative: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRmaWxlLm1lbW9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZmlsZS5tZW1vcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUErQztBQUMvQywrRUFBeUQ7QUFDekQsOENBQTZDO0FBRzdDLGdFQUFnRTtBQUVoRTs7Ozs7R0FLRztBQUNRLFFBQUEsUUFBUSxHQUFHLFVBQVUsYUFBcUIsRUFBRSxXQUFtQjtJQUN4RSxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUNwRSxDQUFDLENBQUE7QUFNRDs7Ozs7R0FLRztBQUNRLFFBQUEsSUFBSSxHQUFHLENBQU8sY0FBa0MsRUFBRSxXQUFXLEVBQUUsYUFBMkIsRUFBRSxFQUFHLEVBQUU7SUFDMUcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUU1QixhQUFhO0lBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLElBQUksVUFBa0IsQ0FBQTtJQUN0QixJQUFJLFFBQVEsR0FBVyxXQUFXLENBQUE7SUFFbEMsbUJBQW1CO0lBQ25CLEVBQUUsQ0FBQyxDQUFDLGNBQWMsWUFBWSx1Q0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLGVBQWUsR0FBUSxjQUFjLENBQUE7UUFDekMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDcEQsaUJBQWlCO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdELENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sY0FBYyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsVUFBVSxHQUFHLGNBQWMsQ0FBQTtJQUM3QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUNELE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3RCxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNqRixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsUUFBUSxHQUFHLFVBQVUsT0FBZSxFQUFFLFdBQW1CO0lBQ2xFLHFDQUFxQztJQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsSUFBSSxVQUFrQixDQUFBO0lBQ3RCLElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQTtJQUVsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsVUFBVSxHQUFHLE9BQU8sQ0FBQTtJQUN0QixDQUFDO0lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO0FBQ3pFLENBQUMsQ0FBQTtBQUVVLFFBQUEsa0JBQWtCLEdBQUcsQ0FBTyxpQkFBOEIsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUN2RixNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sWUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFDNUIsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFBIn0=