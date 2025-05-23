import mongoose, {Schema} from 'mongoose';

const ItemSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true }
    },
    { _id: true }
);

const faqSchema = new Schema({
    category: { type: String, required: true },
    items: { type: [ItemSchema], required: true }
});

export default mongoose.models.Faq || mongoose.model('Faq', faqSchema);