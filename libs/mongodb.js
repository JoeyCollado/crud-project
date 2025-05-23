// import mongoose from "mongoose"
// //here we connect to mongodb

// //create connection to mongoDB
// const connectMongoDB = async () => {
//     try{
//        await mongoose.connect(process.env.MONGODB_URI)
//        console.log("Connected to MongoDB")
//     }catch(error){
//         console.log(error)
//     }
// }

// export default connectMongoDB;


import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;