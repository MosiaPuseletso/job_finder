import job from '../models/saveJob.js';

export const saveJob = async (req, res) => {
    const jobData = {
        email: req.body.email,
        job: req.body.job
    };
    const newJob = new job(jobData);

    try{
        await newJob.save();
        res.status(201).json({status: true});
    }catch(error){
        res.status(409).json({status: false, message: error.message});
    }
}

export const savedJob = async (req, res) => {
    try{
        const jobData = await job.find({
            email: req.body.email
        });

        if(jobData){
            return res.send(jobData);
        }
    }catch(error){

    }
}