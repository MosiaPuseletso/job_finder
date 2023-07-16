import mongoose from "mongoose";

const applyJobSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    cv: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    }
});

const applyJob = mongoose.model('jobFinder_appliedJobs', applyJobSchema);

export default applyJob;