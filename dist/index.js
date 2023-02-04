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
//import dotenv from 'dotenv';
const express_1 = __importDefault(require("express"));
const deserializeUser_1 = __importDefault(require("./middleware/deserializeUser"));
const connect_1 = __importDefault(require("./utils/connect"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Setting: Configuración del servidor
//  dotenv.config();
const app = (0, express_1.default)();
const port = 3000; //config.get<number>('port'); //process.env.PORT || 3000;
//Middleware: funciones que ayudan a procesar datos 
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json({ limit: '50mb', type: 'application/json' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
//Starting the server
//Routes: Encargada de las rutas del servidor
app.use(deserializeUser_1.default);
/*
  app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })
*/
const user_model_1 = __importDefault(require("./models/user.model"));
app.get('', (req, res) => { res.send('Express + TypeScript Server is running'); });
app.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const id = req.params.id;
        const user = yield user_model_1.default.find();
        return res.json(user);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}));
//app.listen(port, async () => {
try {
    //logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
    // Mongodb connection
    (0, connect_1.default)();
    (0, index_route_1.default)(app); // MIDDLE WARE
}
catch (error) {
    console.log(`error en app.listen \n ${error}`);
}
//});
//# sourceMappingURL=index.js.map