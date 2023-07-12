import mongoose from 'mongoose';

const saveJobSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
});

const job = mongoose.model('savedJobs', saveJobSchema);

export default job;