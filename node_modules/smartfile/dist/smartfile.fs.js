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
const SmartfileInterpreter = require("./smartfile.interpreter");
const smartfile_classes_smartfile_1 = require("./smartfile.classes.smartfile");
const memory = require("./smartfile.memory");
/*===============================================================
============================ Checks =============================
===============================================================*/
/**
 *
 * @param filePath
 * @returns {boolean}
 */
exports.fileExistsSync = function (filePath) {
    let fileExistsBool = false;
    try {
        plugins.fsExtra.readFileSync(filePath);
        fileExistsBool = true;
    }
    catch (err) {
        fileExistsBool = false;
    }
    return fileExistsBool;
};
/**
 *
 * @param filePath
 * @returns {any}
 */
exports.fileExists = function (filePath) {
    let done = plugins.q.defer();
    plugins.fs.access(filePath, 4, function (err) {
        err ? done.reject(err) : done.resolve();
    });
    return done.promise;
};
/**
 * Checks if given path points to an existing directory
 */
exports.isDirectory = function (pathArg) {
    try {
        return plugins.fsExtra.statSync(pathArg).isDirectory();
    }
    catch (err) {
        return false;
    }
};
/**
 * Checks if a given path points to an existing file
 */
exports.isFile = function (pathArg) {
    return plugins.fsExtra.statSync(pathArg).isFile();
};
/*===============================================================
============================ FS ACTIONS =========================
===============================================================*/
/**
 * copies a file from A to B on the local disk
 */
exports.copy = function (fromArg, toArg) {
    let done = plugins.q.defer();
    plugins.fsExtra.copy(fromArg, toArg, {}, function () {
        done.resolve();
    });
    return done.promise;
};
/**
 * copies a file SYNCHRONOUSLY from A to B on the local disk
 */
exports.copySync = function (fromArg, toArg) {
    plugins.fsExtra.copySync(fromArg, toArg);
    return true;
};
/**
 * ensures that a directory is in place
 */
exports.ensureDir = (dirPathArg) => {
    let done = plugins.q.defer();
    plugins.fsExtra.ensureDir(dirPathArg, done.resolve);
    return done.promise;
};
/**
 * ensures that a directory is in place
 */
exports.ensureDirSync = (dirPathArg) => {
    plugins.fsExtra.ensureDirSync(dirPathArg);
};
/**
 * ensure an empty directory
 * @executes ASYNC
 */
exports.ensureEmptyDir = (dirPathArg) => {
    let done = plugins.q.defer();
    plugins.fsExtra.ensureDir(dirPathArg, () => {
        plugins.fsExtra.emptyDir(dirPathArg, done.resolve);
    });
    return done.promise;
};
/**
 * ensure an empty directory
 * @executes SYNC
 */
exports.ensureEmptyDirSync = (dirPathArg) => {
    plugins.fsExtra.ensureDirSync(dirPathArg);
    plugins.fsExtra.emptyDirSync(dirPathArg);
};
/**
 * ensures that a file is on disk
 * @param filePath the filePath to ensureDir
 * @param the fileContent to place into a new file in case it doesn't exist yet
 * @returns Promise<void>
 * @exec ASYNC
 */
exports.ensureFile = (filePathArg, initFileStringArg) => {
    let done = plugins.q.defer();
    exports.ensureFileSync(filePathArg, initFileStringArg);
    done.resolve();
    return done.promise;
};
/**
 * ensures that a file is on disk
 * @param filePath the filePath to ensureDir
 * @param the fileContent to place into a new file in case it doesn't exist yet
 * @returns Promise<void>
 * @exec SYNC
 */
exports.ensureFileSync = (filePathArg, initFileStringArg) => {
    if (exports.fileExistsSync(filePathArg)) {
        return null;
    }
    else {
        memory.toFsSync(initFileStringArg, filePathArg);
    }
};
/**
 * removes a file or folder from local disk
 */
exports.remove = function (pathArg) {
    let done = plugins.q.defer();
    plugins.fsExtra.remove(pathArg, function () {
        done.resolve();
    });
    return done.promise;
};
/**
 * removes a file SYNCHRONOUSLY from local disk
 */
exports.removeSync = function (pathArg) {
    plugins.fsExtra.removeSync(pathArg);
    return true;
};
/**
 * removes an array of filePaths from disk
 */
exports.removeMany = function (filePathArrayArg) {
    let promiseArray = [];
    for (let filePath of filePathArrayArg) {
        promiseArray.push(exports.remove(filePath));
    }
    return Promise.all(promiseArray);
};
/**
 * like removeFilePathArray but SYNCHRONOUSLY
 */
exports.removeManySync = function (filePathArrayArg) {
    for (let filePath of filePathArrayArg) {
        exports.removeSync(filePath);
    }
};
/*===============================================================
============================ Write/Read =========================
===============================================================*/
/**
 *
 * @param filePathArg
 * @param fileTypeArg
 * @returns {any}
 */
exports.toObjectSync = function (filePathArg, fileTypeArg) {
    let fileString = plugins.fsExtra.readFileSync(filePathArg, 'utf8');
    let fileType;
    fileTypeArg ? fileType = fileTypeArg : fileType = SmartfileInterpreter.filetype(filePathArg);
    return SmartfileInterpreter.objectFile(fileString, fileType);
};
/**
 * reads a file content to a String
 * @param filePath
 * @returns {string|Buffer|any}
 */
exports.toStringSync = function (filePath) {
    let fileString = plugins.fsExtra.readFileSync(filePath, 'utf8');
    return fileString;
};
exports.fileTreeToObject = (dirPathArg, miniMatchFilter) => __awaiter(this, void 0, void 0, function* () {
    // handle absolute miniMatchFilter
    let dirPath;
    if (plugins.path.isAbsolute(miniMatchFilter)) {
        dirPath = '/';
    }
    else {
        dirPath = dirPathArg;
    }
    let fileTree = yield exports.listFileTree(dirPath, miniMatchFilter);
    let smartfileArray = [];
    for (let filePath of fileTree) {
        let readPath = (() => {
            if (!plugins.path.isAbsolute(filePath)) {
                return plugins.path.join(dirPath, filePath);
            }
            else {
                return filePath;
            }
        })();
        let fileContentString = exports.toStringSync(readPath);
        // push a read file as Smartfile
        smartfileArray.push(new smartfile_classes_smartfile_1.Smartfile({
            contentBuffer: new Buffer(fileContentString),
            base: dirPath,
            path: filePath
        }));
    }
    return smartfileArray;
});
/**
 *
 * @param filePathArg
 * @param options
 * @returns {number}
 */
exports.toVinylSync = function (filePathArg, options = {}) {
    return plugins.vinylFile.readSync(filePathArg, options);
};
/**
 * lets you reload files hot.
 * @param path
 * @returns {any}
 */
exports.requireReload = function (path) {
    return plugins.requireReload(path);
};
/**
 * lists Folders in a directory on local disk
 * @returns Promise
 */
exports.listFolders = function (pathArg, regexFilter) {
    let done = plugins.q.defer();
    let folderArray = plugins.fsExtra.readdirSync(pathArg).filter(function (file) {
        return plugins.fsExtra.statSync(plugins.path.join(pathArg, file)).isDirectory();
    });
    if (regexFilter) {
        folderArray = folderArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    done.resolve(folderArray);
    return done.promise;
};
/**
 * lists Folders SYNCHRONOUSLY in a directory on local disk
 * @returns an array with the folder names as strings
 */
exports.listFoldersSync = function (pathArg, regexFilter) {
    let folderArray = plugins.fsExtra.readdirSync(pathArg).filter(function (file) {
        return plugins.fsExtra.statSync(plugins.path.join(pathArg, file)).isDirectory();
    });
    if (regexFilter) {
        folderArray = folderArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    return folderArray;
};
/**
 * lists Files in a directory on local disk
 * @returns Promise
 */
exports.listFiles = function (pathArg, regexFilter) {
    let done = plugins.q.defer();
    let fileArray = plugins.fsExtra.readdirSync(pathArg).filter(function (file) {
        return plugins.fsExtra.statSync(plugins.path.join(pathArg, file)).isFile();
    });
    if (regexFilter) {
        fileArray = fileArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    done.resolve(fileArray);
    return done.promise;
};
/**
 * lists Files SYNCHRONOUSLY in a directory on local disk
 * @returns an array with the folder names as strings
 */
exports.listFilesSync = function (pathArg, regexFilter) {
    let fileArray = plugins.fsExtra.readdirSync(pathArg).filter(function (file) {
        return plugins.fsExtra.statSync(plugins.path.join(pathArg, file)).isFile();
    });
    if (regexFilter) {
        fileArray = fileArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    return fileArray;
};
/**
 * lists all items (folders AND files) in a directory on local disk
 * @returns Promise<string[]>
 */
exports.listAllItems = function (pathArg, regexFilter) {
    let done = plugins.q.defer();
    let allItmesArray = plugins.fsExtra.readdirSync(pathArg);
    if (regexFilter) {
        allItmesArray = allItmesArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    done.resolve(allItmesArray);
    return done.promise;
};
/**
 * lists all items (folders AND files) in a directory on local disk
 * @returns an array with the folder names as strings
 * @executes SYNC
 */
exports.listAllItemsSync = function (pathArg, regexFilter) {
    let allItmesArray = plugins.fsExtra.readdirSync(pathArg).filter(function (file) {
        return plugins.fsExtra.statSync(plugins.path.join(pathArg, file)).isFile();
    });
    if (regexFilter) {
        allItmesArray = allItmesArray.filter((fileItem) => {
            return regexFilter.test(fileItem);
        });
    }
    return allItmesArray;
};
/**
 * lists a file tree using a miniMatch filter
 * note: if the miniMatch Filter is an absolute path, the cwdArg will be omitted
 * @returns Promise<string[]> string array with the absolute paths of all matching files
 */
exports.listFileTree = (dirPathArg, miniMatchFilter) => {
    let done = plugins.q.defer();
    // handle absolute miniMatchFilter
    let dirPath;
    if (plugins.path.isAbsolute(miniMatchFilter)) {
        dirPath = '/';
    }
    else {
        dirPath = dirPathArg;
    }
    let options = {
        cwd: dirPath,
        nodir: true,
        dot: true
    };
    plugins.glob(miniMatchFilter, options, (err, files) => {
        if (err) {
            console.log(err);
            done.reject(err);
        }
        done.resolve(files);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRmaWxlLmZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRmaWxlLmZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsZ0VBQWdFO0FBRWhFLCtFQUF5RDtBQUV6RCw2Q0FBNEM7QUFDNUM7O2lFQUVpRTtBQUVqRTs7OztHQUlHO0FBQ1EsUUFBQSxjQUFjLEdBQUcsVUFBVSxRQUFRO0lBQzVDLElBQUksY0FBYyxHQUFZLEtBQUssQ0FBQTtJQUNuQyxJQUFJLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QyxjQUFjLEdBQUcsSUFBSSxDQUFBO0lBQ3ZCLENBQUM7SUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsY0FBYyxHQUFHLEtBQUssQ0FBQTtJQUN4QixDQUFDO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsVUFBVSxRQUFRO0lBQ3hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxVQUFVLEdBQUc7UUFDMUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsV0FBVyxHQUFHLFVBQVUsT0FBTztJQUN4QyxJQUFJLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLE9B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