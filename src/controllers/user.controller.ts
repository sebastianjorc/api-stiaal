import { Request, Response } from 'express';
import { CreateUserInput } from './../schemas/user.schema';
import { createUser } from '../services/user.service';
//import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return await res.send(user);
  } catch (e: any) {
    //logger.error(e);
    return await res.status(409).send(`${e.message} error en controller`);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return await res.send(user);
  } catch (e: any) {
    //logger.error(e);
    return await res.status(409).send(`${e.message} error en controller`);
  }
}