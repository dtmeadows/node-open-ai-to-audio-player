"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartfile.plugins");
/* export let toFs = function (from: string, toPath: string) {
  let done = plugins.q.defer()
  let stream = plugins.smartrequest(from).pipe(plugins.fsExtra.createWriteStream(toPath))
  stream.on('finish', function () {
    done.resolve(toPath)
  })
  return done.promise
} */
/**
 *
 * @param fromArg
 * @returns {any}
 */
exports.toObject = function (fromArg) {
    let done = plugins.q.defer();
    plugins.smartrequest.request(fromArg, {
        method: 'get'
    }).then((res) => {
        if (res.statusCode === 200) {
            done.resolve(res.body);
        }
        else {
            console.log('could not get remote file from ' + fromArg);
            done.reject(new Error('could not get remote file from ' + fromArg));
        }
    });
    return done.promise;
};
/**
 *
 * @param fromArg
 * @returns {any}
 */
exports.toString = (fromArg) => {
    let done = plugins.q.defer();
    plugins.smartrequest.get(fromArg).then((res) => {
        if (res.statusCode === 200) {
            done.resolve(res.body);
        }
        else {
            done.reject(new Error('could not get remote file from ' + fromArg));
        }
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRmaWxlLnJlbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZmlsZS5yZW1vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBK0M7QUFHL0M7Ozs7Ozs7SUFPSTtBQUVKOzs7O0dBSUc7QUFDUSxRQUFBLFFBQVEsR0FBRyxVQUFVLE9BQWU7SUFDN0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDcEMsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDbkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsT0FBTyxDQUFDLENBQUE7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3JCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDUSxRQUFBLFFBQVEsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsaUNBQWlDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNyRSxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==