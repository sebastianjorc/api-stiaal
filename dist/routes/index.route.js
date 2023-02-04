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
const user_controller_1 = require("./../controllers/user.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const user_schema_1 = require("../schemas/user.schema");
const user_model_1 = __importDefault(require("./../models/user.model"));
function routes(app) {
    app.get('', (req, res) => { res.send('Express + TypeScript Server is running'); });
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    // User creation route - UserHandler is validated with middleware
    app.post('/api/users', (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    app.get('/api/users', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            //const id = req.params.id;
            const user = yield user_model_1.default.find();
            return res.json(user);
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }));
    // MIDLEWARES
    /*const routes = Router();
    routes.use('/', defaultRoute);
    routes.use('/api/users', userRoute); */
}
exports.default = routes;
//# sourceMappingURL=index.route.js.map