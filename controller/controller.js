const User = require('../model/userModel.js')


exports.createUser=async (req,res)=>{
    try{
        const {user_name,user_email,user_password} = req.body
        if(!user_email || !user_name || !user_password){
            res.status(400).json({
                message: "all field required"
            })
        }
        const user = await User.create({
            name:user_name,
            email:user_email,
            password:user_password
        })
        res.status(200).json({
            success: true,
            message: "User Registered successfuly"
        })
    }catch(err){
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}

exports.login = async (req,res)=>{
    try{
        const {user_email,user_password}= req.body
        if(!user_email || !user_password){
            res.status(400).json({
                message: "all field required"
            })
        }
        const user = await User.findOne({email:user_email})
        if(user){
            if(user.password===user_password){
                res.status(200).json({
                    success: true,
                    message: "successfuly login"
                })
            }else{
                res.status(400).json({ error: "password is wrong" });
        }
        }else{
            res.status(400).json({
                error: "no account assocaiate with this email"
            })
        }
    }catch(err){
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}