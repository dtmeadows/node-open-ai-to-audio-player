"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const plugins = require("./beautylog.plugins");
let defaultOptions = {
    font: 'Star Wars',
    color: 'green',
    cb: function () { }
};
exports.figlet = function (textArg, optionsArg) {
    let done = plugins.q.defer();
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    plugins.figlet(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(colorFiglet(data, options.color));
        options.cb();
        done.resolve();
    });
    return done.promise;
};
exports.figletSync = function (textArg, optionsArg) {
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    let figletString = plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    console.log(colorFiglet(figletString, options.color));
    return true;
};
let colorFiglet = (figletStringArg, colorArg) => {
    let figletArray = figletStringArg.split('\n');
    let figletStringCombined = '';
    for (let figletRow of figletArray) {
        figletRow = plugins.beautycolor.coloredString(figletRow, colorArg);
        figletStringCombined = figletStringCombined + figletRow + '\n';
    }
    return figletStringCombined;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFDdkIsK0NBQStDO0FBUS9DLElBQUksY0FBYyxHQUFtQjtJQUNqQyxJQUFJLEVBQUUsV0FBVztJQUNqQixLQUFLLEVBQUUsT0FBTztJQUNkLEVBQUUsRUFBRSxjQUFZLENBQUM7Q0FDcEIsQ0FBQTtBQUVVLFFBQUEsTUFBTSxHQUFHLFVBQVMsT0FBZSxFQUFFLFVBQVc7SUFDckQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUQsT0FBTyxDQUFDLE1BQU0sQ0FDVixPQUFPLEVBQ1A7UUFDSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUM1QixFQUNELFVBQVMsR0FBRyxFQUFFLElBQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sQ0FBQTtRQUNWLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDN0MsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xCLENBQUMsQ0FDSixDQUFBO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxVQUFVLEdBQUcsVUFBUyxPQUFlLEVBQUMsVUFBMkI7SUFDeEUsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVELElBQUksWUFBWSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQztRQUN2RCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUM1QixDQUFDLENBQUE7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUVELElBQUksV0FBVyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQXdDO0lBQ3hFLElBQUksV0FBVyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0MsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUE7SUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksV0FBWSxDQUFDLENBQUMsQ0FBQztRQUNqQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2xFLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDbEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQTtBQUMvQixDQUFDLENBQUEifQ==