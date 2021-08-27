import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);