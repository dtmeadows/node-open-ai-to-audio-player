"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = require("./smartenv.envhelpers");
class Environment {
    constructor() {
        this.runtimeEnv = helpers.getEnvString();
        this.isBrowser = helpers.isBrowser();
        this.userAgent = helpers.getUserAgentString();
        this.isNode = helpers.isNode();
        this.nodeVersion = helpers.getNodeVersion();
        this.isCI = helpers.isCI();
        this.isTravis = helpers.isTravis();
        this.isC9 = helpers.isC9();
    }
    ;
}
exports.Environment = Environment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuY2xhc3Nlcy5lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmNsYXNzZXMuZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQ7SUFTRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUFBLENBQUM7Q0FDSDtBQW5CRCxrQ0FtQkMifQ==