import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";
//here we do crud operations
export async function POST(request){
    //get data from request
    const {title, description} = await request.json();
    //connect to database
    await connectMongoDB();
    //create the topic 
    await Topic.create({ title, description });
    //return a next response
    return NextResponse.json({message: "Topic Created"}, {status: 201})
}

//use postman to check if api works