"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./beautylog.plugins");
const beautylog_remote_1 = require("./beautylog.remote");
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
exports.internalLog = function (logType = 'normal', logText = 'empty log') {
    switch (plugins.smartenv.getEnv().runtimeEnv) {
        case 'node':
            exports.logNode(logType, logText);
            beautylog_remote_1.remoteLog(logType, logText);
            break;
        case 'browser':
            logBrowser(logText, logType);
            break;
        default:
            console.log('something is strange about the platform in which you try to use beautylog');
            break;
    }
};
let coloredString = plugins.beautycolor.coloredString;
let localBl = {
    dirPrefix: coloredString(' DIR ', 'white', 'blue') + ' ',
    errorPrefix: coloredString(' ', 'red', 'red') + coloredString(' ERROR!  ', 'red', 'black') + ' ',
    infoPrefix: coloredString(' ', 'blue', 'blue') + coloredString(' INFO: ', 'blue', 'black') + ' ',
    logPrefix: coloredString(' ', 'white', 'cyan') + coloredString(' LOG: ', 'cyan', 'black') + ' ',
    notePrefix: coloredString(' ', 'pink', 'pink') + coloredString(' NOTE -> ', 'pink', 'black') + ' ',
    okPrefix: coloredString(' ', 'green', 'green') + coloredString(' OK! ', 'green', 'black') + ' ',
    successPrefix: coloredString(' ', 'green', 'green') + coloredString(' SUCCESS! ', 'green', 'black') + ' ',
    warnPrefix: coloredString(' ', 'orange', 'orange') + coloredString(' WARN: -> ', 'orange', 'black') + ' '
};
exports.logNode = function (logType, logText) {
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + coloredString(logText, 'blue');
                break;
            case 'error':
                logText = localBl.errorPrefix + coloredString(logText, 'red');
                break;
            case 'info':
                logText = localBl.infoPrefix + coloredString(logText, 'blue');
                break;
            case 'normal':
                logText = localBl.logPrefix + coloredString(logText, 'cyan');
                break;
            case 'note':
                logText = localBl.notePrefix + coloredString(logText, 'pink');
                break;
            case 'ok':
                logText = localBl.okPrefix + coloredString(logText, 'green');
                break;
            case 'success':
                logText = localBl.successPrefix + coloredString(logText, 'green');
                break;
            case 'warn':
                logText = localBl.warnPrefix + coloredString(logText, 'orange');
                break;
            case 'log':
                logText = localBl.logPrefix + coloredString(logText, 'cyan');
                break;
            default:
                coloredString(logText, 'blue');
                console.log(('unknown logType for "' + logText + '"'));
                break;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix
            + 'You seem to have tried logging something strange' + error);
        return false;
    }
};
let logBrowser = function (logText, logType) {
    switch (logType) {
        case 'dir':
            logText = localBl.dirPrefix + coloredString(logText, 'blue');
            break;
        case 'error':
            logText = localBl.errorPrefix + logText.red.bold;
            break;
        case 'info':
            console.log('%c Info: %c ' + logText, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
            break;
        case 'normal':
            logText = localBl.logPrefix + logText.cyan.bold;
            break;
        case 'ok':
            console.log('%c OK: %c ' + logText, 'background:#000000;color:#8BC34A;', 'color:#000000;');
            break;
        case 'success':
            console.log('%c Success: %c ' + logText, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;');
            break;
        case 'warn':
            console.log('%c Warn: %c ' + logText, 'background:#000000;color:#FB8C00;', 'color:#000000;');
            break;
        case 'log':
            console.log('%c Log: %c ' + logText, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;');
            break;
        default:
            console.log('unknown logType for "' + logText + '"');
            break;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmxvZy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQThDO0FBQzlDLHlEQUE4QztBQUU5Qzs7Ozs7R0FLRztBQUNRLFFBQUEsV0FBVyxHQUFHLFVBQVUsVUFBa0IsUUFBUSxFQUFFLFVBQWtCLFdBQVc7SUFDMUYsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssTUFBTTtZQUNULGVBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDekIsNEJBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDM0IsS0FBSyxDQUFBO1FBQ1AsS0FBSyxTQUFTO1lBQ1osVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUM1QixLQUFLLENBQUE7UUFDUDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQTtZQUN4RixLQUFLLENBQUE7SUFDVCxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUE7QUFFckQsSUFBSSxPQUFPLEdBQUc7SUFDWixTQUFTLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRztJQUN4RCxXQUFXLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRztJQUNoRyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFB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