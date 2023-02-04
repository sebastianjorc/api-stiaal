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
// for database connection
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbUri = "mongodb+srv://admin:admin@stiaalcluster.6h9tltk.mongodb.net/StiaalDB?retryWrites=true&w=majority"; //config.get<string>("dbUri")
        try {
            mongoose_1.default.set('useNewUrlParser', true);
            mongoose_1.default.set('useUnifiedTopology', true);
            mongoose_1.default.set('strictQuery', true);
            mongoose_1.default.set('useNewUrlParser', true);
            mongoose_1.default.set('useFindAndModify', false);
            mongoose_1.default.set('useCreateIndex', true);
            yield mongoose_1.default
                .connect(dbUri)
                .then(() => console.log("connected to mongodb atlas STIAAL"))
                .catch(err => console.log(`${err}`));
            logger_1.default.info('DB connected');
        }
        catch (error) {
            console.log(`ERROR al conectarse con la base de datos ${error}`);
            process.exit(1);
        }
    });
}
exports.default = connect;
//# sourceMappingURL=connect.js.map