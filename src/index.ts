import dotenv from 'dotenv';
import express, { Request, Response } from 'express'
import deserializeUser from './middleware/deserializeUser';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes/index.route';

  // Setting: Configuración del servidor
  dotenv.config();
  const app = express(); 
  const port = process.env.PORT || 3000;//config.get<number>('port');

//Middleware: funciones que ayudan a procesar datos 
//app.use(morgan('dev')); 
app.use(express.json());
//app.use(cors({origin: 'http://localhost:4200'}))
//app.use(bodyParser.json({limit:'50mb', type:'application/json'}));
//app.use(bodyParser.urlencoded({limit:'50mb', extended:true}));

//Starting the server
//Routes: Encargada de las rutas del servidor
app.use(deserializeUser);
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
  
app.listen(port, async () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  // Mongodb connection
  await connect(); 
  routes(app) // MIDDLE WARE
}); 