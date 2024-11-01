"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const plugins = require("./beautylog.plugins");
const beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.oraActive = false; // when an Ora is active (e.g. start()) this is true
class Ora {
    constructor(textArg, colorArg, startArg = false) {
        this._oraObject = plugins.ora({
            spinner: 'dots',
            text: textArg,
            color: colorArg
        });
        if (startArg) {
            this.start();
        }
    }
    text(textArg) {
        this._oraObject.text = textArg;
    }
    start(textArg, colorArg) {
        if (textArg) {
            this.text(textArg);
        }
        if (colorArg) {
            this._oraObject.color = colorArg;
        }
        exports.activeOra = this;
        exports.oraActive = true;
        this._oraObject.start();
    }
    end() {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.oraActive = false;
    }
    endOk(textArg) {
        this.end();
        beautylog_log_helpers_1.logNode('ok', textArg);
    }
    endError(textArg) {
        this.end();
        beautylog_log_helpers_1.logNode('error', textArg);
    }
    pause() {
        this._oraObject.stop();
    }
    stop() {
        this.end();
    }
}
exports.Ora = Ora;
exports.ora = new Ora('init...', 'blue', false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMub3JhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYmVhdXR5bG9nLmNsYXNzZXMub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQXVCO0FBQ3ZCLCtDQUE4QztBQUM5QyxtRUFBaUQ7QUFFdEMsUUFBQSxTQUFTLEdBQVksS0FBSyxDQUFBLENBQUMsb0RBQW9EO0FBRzFGO0lBR0UsWUFBWSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxXQUFvQixLQUFLO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM1QixPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNkLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU87UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFnQixFQUFFLFFBQWlCO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQUMsQ0FBQztRQUNsRCxpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixpQkFBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFDRCxHQUFHO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3ZCLGlCQUFTLEdBQUcsU0FBUyxDQUFBO1FBQ3JCLGlCQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFDRCxRQUFRLENBQUMsT0FBTztRQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLCtCQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNaLENBQUM7Q0FDRjtBQTVDRCxrQkE0Q0M7QUFFVSxRQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBIn0=