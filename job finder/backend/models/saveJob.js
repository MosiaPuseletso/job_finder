import mongoose from 'mongoose';

const saveJobSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    job: {
        type: JSON,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
});

const job = mongoose.model('jobFinder_savedJobs', saveJobSchema);

export default job;