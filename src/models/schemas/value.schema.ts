import {model, models, Schema} from "mongoose";

const ValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    }
});

const Value = models.Value || model("Value", ValueSchema);

export default Value;