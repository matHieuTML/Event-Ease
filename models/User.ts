import mongoose, {Schema, Document} from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    participatedEvents: string[];
    createdEvents: string[];
    notified: boolean;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        required: true
        },
    participatedEvents: {
        type: [String], 
        required: true
    },
    createdEvents: {
        type: [String], 
        required: true
    },
    notified: {
        type: Boolean, 
        required: true
    }
});

export default mongoose.models.User || mongoose.model<IUser>('Event', UserSchema);
