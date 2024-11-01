"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartenv.plugins");
exports.obsItems = {};
/**
 * Objectstorage allows easy sharing of objects within node
 */
exports.obs = {
    add: (keyNameArg, objectArg) => {
        if (!keyNameArg) {
            console.log('keyName is undefined');
            return;
        }
        if (!objectArg) {
            console.log('objectArg is undefined');
        }
        if (!(exports.obsItems[keyNameArg])) {
            exports.obsItems[keyNameArg] = objectArg;
        }
        else {
            console.log('object is already present, so add operation has failed.');
        }
        return exports.obsItems[keyNameArg];
    },
    replace: function (paramNameArg, objectArg) {
        exports.obsItems[paramNameArg] = objectArg;
    },
    merge: function (paramNameArg, objectArg) {
        if (!(typeof exports.obsItems[paramNameArg] === 'undefined')) {
            exports.obsItems[paramNameArg] = plugins.lodash.assign(exports.obsItems[paramNameArg], objectArg);
        }
        else {
            console.log('object is not present, so there is nothing to merge');
        }
    },
    get: function (keyName) {
        return exports.obsItems[keyName];
    },
    getAll: function () {
        return exports.obsItems;
    },
    addComplete: function (itemsArg) {
        exports.obsItems = plugins.lodash.assign(exports.obsItems, itemsArg);
        return exports.obsItems;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYub2JqZWN0c3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52Lm9iamVjdHN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFFbkMsUUFBQSxRQUFRLEdBQVEsRUFBRSxDQUFBO0FBRTdCOztHQUVHO0FBQ1EsUUFBQSxHQUFHLEdBQVE7SUFDcEIsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVM7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUE7UUFDUixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQVEsQ0FBRSxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixnQkFBUSxDQUFFLFVBQVUsQ0FBRSxHQUFHLFNBQVMsQ0FBQTtRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUE7UUFDeEUsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBUSxDQUFFLFVBQVUsQ0FBRSxDQUFBO0lBQy9CLENBQUM7SUFDRCxPQUFPLEVBQUUsVUFBVSxZQUFZLEVBQUUsU0FBUztRQUN4QyxnQkFBUSxDQUFFLFlBQVksQ0FBRSxHQUFHLFNBQVMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0QsS0FBSyxFQUFFLFVBQVUsWUFBWSxFQUFFLFNBQVM7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sZ0JBQVEsQ0FBRSxZQUFZLENBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsZ0JBQVEsQ0FBRSxZQUFZLENBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBUSxDQUFFLFlBQVksQ0FBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUNELEdBQUcsRUFBRSxVQUFVLE9BQU87UUFDcEIsTUFBTSxDQUFDLGdCQUFRLENBQUUsT0FBTyxDQUFFLENBQUE7SUFDNUIsQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNOLE1BQU0sQ0FBQyxnQkFBUSxDQUFBO0lBQ2pCLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBVSxRQUFRO1FBQzdCLGdCQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNwRCxNQUFNLENBQUMsZ0JBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0YsQ0FBQSJ9