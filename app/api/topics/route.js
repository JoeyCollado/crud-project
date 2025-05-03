import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";
//here we do crud operations

//POST function
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

//GET function 
export async function GET(){
    await connectMongoDB();
    await Topic.find(); //find all the topics and return it
    const topics = await Topic.find(); //store find topic inside 
    return NextResponse.json({topics})
}

//DELETE function
export async function DELETE(request){ 
    const id = request.nextUrl.searchParams.get('id'); //sending the id of the topic as a search parameter for this context
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic Deleted"}, {status: 200})
}
//use postman to check if api works