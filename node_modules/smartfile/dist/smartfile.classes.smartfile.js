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
const memory = require("./smartfile.memory");
/**
 * class Smartfile
 * -> is vinyl file compatible
 */
class Smartfile {
    /**
     * the constructor of Smartfile
     * @param optionsArg
     */
    constructor(optionsArg) {
        if (optionsArg.contentBuffer) {
            this.contentBuffer = optionsArg.contentBuffer;
        }
        else if (optionsArg.contentString) {
            this.setContentsFromString(optionsArg.contentString);
        }
        else {
            console.log('created empty Smartfile?');
        }
        this.path = optionsArg.path;
        this.parsedPath = plugins.path.parse(this.path);
        this.base = optionsArg.base;
    }
    /**
     * set contents from string
     * @param contentString
     */
    setContentsFromString(contentString) {
        this.contents = new Buffer(contentString);
    }
    /**
     * write file to disk
     * Behaviours:
     * - no argument write to exactly where the file was picked up
     */
    write(pathArg) {
        return __awaiter(this, void 0, void 0, function* () {
            const stringToWrite = this.contentBuffer.toString();
            yield memory.toFs(stringToWrite, this.path);
        });
    }
    /**
     * read file from disk
     */
    read() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // -----------------------------------------------
    // vinyl compatibility
    // -----------------------------------------------
    /**
     * vinyl-compatibility: alias of this.contentBuffer
     */
    get contents() {
        return this.contentBuffer;
    }
    set contents(contentsArg) {
        this.contentBuffer = contentsArg;
    }
    /**
     * vinyl-compatibility
     */
    get cwd() {
        return process.cwd();
    }
    /**
     * return relative path of file
     */
    get relative() {
        return plugins.path.relative(this.base, this.path);
    }
    /**
     * return truw when the file has content
     */
    isNull() {
        if (!this.contentBuffer) {
            return true;
        }
        return false;
    }
    /**
     * return true if contents are Buffer
     */
    isBuffer() {
        if (this.contents instanceof Buffer) {
            return true;
        }
        return false;
    }
    isDirectory() {
        return false;
    }
    isStream() {
        return false;
    }
    isSymbolic() {
        return false;
    }
    // update things
    updateFileName(fileNameArg) {
        let oldFileName = this.parsedPath.base;
        this.path = this.path.replace(new RegExp(oldFileName + '$'), fileNameArg);
    }
}
exports.Smartfile = Smartfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRmaWxlLmNsYXNzZXMuc21hcnRmaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRmaWxlLmNsYXNzZXMuc21hcnRmaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUMsNkNBQTRDO0FBUzVDOzs7R0FHRztBQUNIO0lBMkJFOzs7T0FHRztJQUdILFlBQWEsVUFBd0M7UUFDbkQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFBO1FBQy9DLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDekMsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUE7SUFDN0IsQ0FBQztJQUdEOzs7T0FHRztJQUNILHFCQUFxQixDQUFDLGFBQXFCO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDRyxLQUFLLENBQUUsT0FBZ0I7O1lBQzNCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDbkQsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0MsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxJQUFJOztRQUNWLENBQUM7S0FBQTtJQUVELGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBQ2xEOztPQUVHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztJQUNELElBQUksUUFBUSxDQUFFLFdBQVc7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUE7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLGNBQWMsQ0FBRSxXQUFtQjtRQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0NBQ0Y7QUF2SUQsOEJBdUlDIn0=