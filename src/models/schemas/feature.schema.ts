import {model, models, Schema} from "mongoose";

const FeatureSchema = new Schema({
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
    }
});

const Feature = models.Feature || model("Feature", FeatureSchema);

export default Feature;