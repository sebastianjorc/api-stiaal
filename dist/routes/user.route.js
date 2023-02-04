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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_model_1 = __importDefault(require("./../models/user.model"));
//import {userController} from './../controllers/user.controller'
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const id = req.params.id;
        const user = yield user_model_1.default.find();
        return res.json(user);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}));
/**/
exports.userRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new user_model_1.default(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: `${error}    ${req.body}` }));
})); //userController.createUser);
/*
userRoute.get('/:id', userController.getUser);
userRoute.put('/:id', userController.editUser);
userRoute.delete('/:id', userController.editUser);
*/ 
//# sourceMappingURL=user.route.js.map