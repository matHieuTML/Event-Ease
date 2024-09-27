import mongoose from "mongoose";



export function connect() {

    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error('Mongo URI is missing');
    }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection.asPromise();
  }else{
    console.log('connected to mongo');
    return mongoose.connect(mongoUri);

  }

}

export default connect;