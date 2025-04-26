import mongoose from "moongose"
//here we connect to mongodb

//create connection to mongoDB
const connectMongoDB = () => {
    try{
       mongoose.connect(process.env.MONGODB_URI)
       console.log("Connected to MongoDB")
    }catch(error){
        console.log(error)
    }
}

export default connectMongoDB;