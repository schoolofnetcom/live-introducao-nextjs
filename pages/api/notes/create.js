import dbConnect from './../../../lib/mongodb';
import Note from './../../../models/Note';

export default async function handler(req, res) {
    try {
        await dbConnect();
        const data = await Note.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};