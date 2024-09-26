import mongoose, {Schema, Document} from "mongoose";

interface IEvent extends Document {
    name: string;
    date: Date;
    location: string;
    category: string;
    description: string;
    image: string;

}

const EventSchema: Schema = new Schema({
    name: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        required: true
        },
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    }
});

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
