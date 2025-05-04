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