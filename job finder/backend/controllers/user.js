import user from '../models/user.js';

export const createUser = async (req, res) => {
    const userData = req.body;
    const newUser = new user(userData);

    try{
        await newUser.save();

        res.status(201).json({fullname: userData.fullname, email: userData.email, status: true});
    }catch(error){
        res.status(409).json({status: false, message: error.message});
    }
}

export const authUser = async (req, res) => {
    try {
        const userData = await user.findOne({
            email: req.body.email,
            password: req.body.password
        });
        
        if(userData){
            return res.status(200).json({fullname: userData.fullname, email: userData.email, status: true});
        }else{
            return res.status(200).json({status: false});
        }
    } catch (error) {
        res.status(404).json({status: false, message: error.message});
    }
}