// for database connection
import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect(){
  const dbUri = config.get<string>("dbUri")
  try {
    mongoose.set('strictQuery', true);    
    await mongoose
      .connect(dbUri)
      .then( () =>console.log("connected to mongodb atlas STIAAL"))
      .catch(err => console.log(`${err}`)); 
    logger.info('DB connected')    
  } catch (error) {
    console.log(`ERROR al conectarse con la base de datos ${error}`);
    process.exit(1);
  }
}

export default connect;