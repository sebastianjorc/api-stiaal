// for database connection
import mongoose from 'mongoose';
//import config from 'config';
import logger from './logger';

async function connect(){
  const dbUri = "mongodb+srv://admin:admin@stiaalcluster.6h9tltk.mongodb.net/StiaalDB?retryWrites=true&w=majority";//config.get<string>("dbUri")
  try {
    mongoose.set('useNewUrlParser', true);   
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('strictQuery', true);     
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);  
    await mongoose
      .connect(dbUri)
      .then(()=>console.log("connected to mongodb atlas STIAAL"))
      .catch(err => console.log(`${err}`)); 
    logger.info('DB connected')    
  } catch (error) {
    console.log(`Connect: ERROR al conectarse con la base de datos ${error}`);
    process.exit(1);
  }
}

export default connect;