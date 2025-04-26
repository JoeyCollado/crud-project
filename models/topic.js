//create schema
import mongoose, {Schema} from "moongose";

const topicSchema = new Schema(
    {
        title: String,
        description: String
    },{
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || moongose.model("Topic", topicSchema) //if we already have the model just get the topic

export default Topic

//model is created