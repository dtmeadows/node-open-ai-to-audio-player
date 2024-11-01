"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog_classes_ora_1 = require("./beautylog.classes.ora");
let nativeLog = console.log;
let nativeError = console.error;
/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
let route = function (statusArg) {
    if (statusArg === true) {
        console.log = exports.beautyConsole.log;
        console.error = exports.beautyConsole.error;
    }
    else {
        console.log = nativeLog;
    }
};
exports.beautyConsole = {
    log: function (logArg) {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeLog, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeLog, arguments);
        }
    },
    error: function () {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeError, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeError, arguments);
        }
    }
};
route(true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iZWF1dHlsb2cuY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUV2QixtRUFBOEQ7QUFDOUQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQTtBQUMzQixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0FBRS9COztHQUVHO0FBQ0gsSUFBSSxLQUFLLEdBQUcsVUFBUyxTQUFrQjtJQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxHQUFHLHFCQUFhLENBQUMsR0FBRyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLEdBQUcscUJBQWEsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUE7SUFDM0IsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVVLFFBQUEsYUFBYSxHQUFHO0lBQ3ZCLEdBQUcsRUFBRSxVQUFTLE1BQVc7UUFDckIsRUFBRSxDQUFDLENBQUMsaUNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixpQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2pCLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLLEVBQUU7UUFDSCxFQUFFLENBQUMsQ0FBQyxpQ0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDakIsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDdkMsaUNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEifQ==