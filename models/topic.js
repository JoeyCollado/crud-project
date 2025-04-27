// //create schema
// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema(
//     {
//         title: String,
//         description: String
//     },{
//         timestamps: true,
//     }
// );

// const Topic = mongoose.models.Topic || moongose.model("Topic", topicSchema) //if we already have the model just get the topic

// export default Topic

// //model is created

import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;