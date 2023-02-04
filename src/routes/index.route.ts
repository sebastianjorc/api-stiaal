
import { Express, Request, Response } from 'express';
import { createUserHandler } from './../controllers/user.controller'

import validateResource from '../middleware/validateResource';
import { createSessionSchema } from '../schemas/session.schema';
import { createUserSchema } from '../schemas/user.schema';
import User from './../models/user.model';

  function routes (app: Express){        

    app.get('', (req: Request, res: Response) => { res.send('Express + TypeScript Server is running'); });
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
    
    // User creation route - UserHandler is validated with middleware
    app.post('/api/users', validateResource(createUserSchema), createUserHandler); 
    app.get('/api/users', async (req : Request, res : Response) => {
        try {
          //const id = req.params.id;
          const user = await User.find();
          return res.json(user);
        } 
        catch (err : any) {
          return res.status(500).json({ message: err.message });
        }    
      });

    // MIDLEWARES
    /*const routes = Router();
    routes.use('/', defaultRoute);
    routes.use('/api/users', userRoute); */
}

export default routes;