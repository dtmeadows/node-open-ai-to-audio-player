"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartfile.plugins");
exports.filetype = (pathArg) => {
    let extName = plugins.path.extname(pathArg);
    let fileType = extName.replace(/\.([a-z]*)/, '$1'); // remove . form fileType
    return fileType;
};
exports.objectFile = (fileStringArg, fileTypeArg) => {
    switch (fileTypeArg) {
        case 'yml':
        case 'yaml':
            return plugins.yaml.safeLoad(fileStringArg);
        case 'json':
            return JSON.parse(fileStringArg);
        default:
            console.error('file type ' + fileTypeArg.blue + ' not supported');
            break;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRmaWxlLmludGVycHJldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRmaWxlLmludGVycHJldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQStDO0FBRXBDLFFBQUEsUUFBUSxHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDOUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0MsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyx5QkFBeUI7SUFDM0UsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUE7QUFFVSxRQUFBLFVBQVUsR0FBRyxDQUFDLGFBQXFCLEVBQUUsV0FBVyxFQUFFLEVBQUU7SUFDM0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLEtBQUssQ0FBRTtRQUNaLEtBQUssTUFBTTtZQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMvQyxLQUFLLE1BQU07WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNwQztZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQTtZQUNqRSxLQUFLLENBQUE7SUFDYixDQUFDO0FBQ0wsQ0FBQyxDQUFBIn0=