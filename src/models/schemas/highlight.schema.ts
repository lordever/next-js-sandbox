import {model, models, Schema} from "mongoose";

const HighlightItemSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imagePath: {type: String, required: true},
    buttonText: {type: String, required: false},
}, {_id: true});

const HighlightSchema = new Schema({
    home: {type: [HighlightItemSchema], required: true},
    about: {type: [HighlightItemSchema], required: true},
});

const Highlight = models.Highlight || model('Highlight', HighlightSchema);

export default Highlight;