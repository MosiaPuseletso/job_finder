import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
});

const user = mongoose.model('jobFinder_users', userSchema);

export default user;