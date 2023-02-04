import pino from 'pino'
import pretty from 'pino-pretty'
import { createSchema } from 'ts-mongoose';

const stream = pretty({
  colorize: true
})
const log = pino(stream)

try{  log.info('hi');} catch(error){console.log(`Error en logger.ts \n ${error}`);};
export default log;