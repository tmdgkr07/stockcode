"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// plugins/logger.ts
const core_1 = require("@remote-kakao/core");
class LoggerPlugin extends core_1.RKPlugin {
    constructor() {
        super(...arguments);
        this.onMessage = (msg) => __awaiter(this, void 0, void 0, function* () {
            this.log(`${msg.sender.name}: ${msg.content}`);
        });
    }
}
exports.default = LoggerPlugin;
