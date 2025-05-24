import {model, models, Schema} from "mongoose";

const ContactSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {id: true});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;