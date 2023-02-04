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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
    avatarPath: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (!user.isModified('password')) {
            return yield next();
        }
        //console.log("\n\n pre error \n\n");
        // aquí debajo está el error
        //const salt = await bcrypt.genSalt(config.get('saltWorkFactor'));
        // hash and replace password
        //const hash = await bcrypt.hashSync(user.password, salt);
        //user.password = hash;
        //console.log("\n\npost salt error: "+user.password+"\n\n");
        return yield next();
    });
});
userSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        return bcrypt_1.default.compare(candidatePassword, user.password).catch((e) => false);
    });
}; /**/
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;
/*import mongoose from 'mongoose';

export interface IUser extends mongoose.Document{
    avatarPath:String;
    username:String;
    email:String;
    password:String;
}

export const userSchema = new mongoose.Schema({
    avatarPath: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    somethingElse: String,
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
*/ 
//# sourceMappingURL=user.model.js.map