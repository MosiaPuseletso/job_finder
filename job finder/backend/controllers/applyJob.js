import applyJob from '../models/applyJob.js';

export const applyJobs = async (req, res) => {
    const newData = req.body;
    const newJob = new applyJob(newData);

    try{
        await newJob.save();

        res.status(201).json({status: true});
    }catch(error){
        res.status(409).json({status: false, message: error.message});
    }
}