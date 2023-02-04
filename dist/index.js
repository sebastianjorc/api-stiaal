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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const deserializeUser_1 = __importDefault(require("./middleware/deserializeUser"));
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const index_route_1 = __importDefault(require("./routes/index.route"));
// Setting: Configuración del servidor
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; //config.get<number>('port');
//Middleware: funciones que ayudan a procesar datos 
//app.use(morgan('dev')); 
app.use(express_1.default.json());
//app.use(cors({origin: 'http://localhost:4200'}))
//app.use(bodyParser.json({limit:'50mb', type:'application/json'}));
//app.use(bodyParser.urlencoded({limit:'50mb', extended:true}));
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
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`⚡️[server]: Server is running at http://localhost:${port}`);
    // Mongodb connection
    yield (0, connect_1.default)();
    (0, index_route_1.default)(app); // MIDDLE WARE
}));
//# sourceMappingURL=index.js.map