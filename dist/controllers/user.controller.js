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
exports.getAllUserHandler = exports.createUserHandler = void 0;
const user_service_1 = require("../services/user.service");
//import logger from '../utils/logger';
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, user_service_1.createUser)(req.body);
            return yield res.send(user);
        }
        catch (e) {
            //logger.error(e);
            return yield res.status(409).send(`${e.message} error en controller`);
        }
    });
}
exports.createUserHandler = createUserHandler;
function getAllUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, user_service_1.createUser)(req.body);
            return yield res.send(user);
        }
        catch (e) {
            //logger.error(e);
            return yield res.status(409).send(`${e.message} error en controller`);
        }
    });
}
exports.getAllUserHandler = getAllUserHandler;
//# sourceMappingURL=user.controller.js.map