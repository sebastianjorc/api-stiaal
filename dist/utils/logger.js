"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const stream = (0, pino_pretty_1.default)({
    colorize: true
});
const log = (0, pino_1.default)(stream);
log.info('hi');
exports.default = log;
//# sourceMappingURL=logger.js.map