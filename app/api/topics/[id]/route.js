import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function PUT(request, {params}){
   //send params as id
   const {id} = params;
   const {newTitle: title, newDescription: description} = await request.json();
   //connect to database
   await connectMongoDB();
   await Topic.findByIdAndUpdate(id, {title,description})
   return NextResponse.json({message: "Topic updated"}, {status:200})
}

//get single topic by id
export async function GET(request, {params}){
   const {id} = params;
   await connectMongoDB();
   const topic = await Topic.findOne({_id: id});
   return NextResponse.json({topic}, {status: 200});

   //selecting 1 topic using postman http://localhost:3000/api/topics/68188ab55497de9114716ccf
}