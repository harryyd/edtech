import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionDb = async () =>{
    console.log("fegk" ,  process.env.MONGO_URL ) ;
    try{

        console.log("another changes"  ) ;   
        const connection  = await mongoose.connect(process.env.MONGO_URL) ;

        console.log(`MongoDB connected : ${connection.connection.host}`) ;
    }catch(error) {
        console.log(error , " erorr at db connection") ;
        process.exit(1) ;
    }
} 

export default connectionDb ;