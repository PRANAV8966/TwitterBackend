import UserService from '../service/user-service.js'
const userService = new UserService();

import { StatusCodes } from 'http-status-codes';

const signUp = async (req, res) => {
    try {
        const user = await userService.createUser({
            userEmail:req.body.Email,
            userPassword:req.body.Password,
            name: req.body.name    
        });
        return res.status(StatusCodes.CREATED).json({
            data:user,
            success:true,
            message:'successfully created user',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to create user',
            error:error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const session = await userService.signIn(req.body.Email, req.body.Password);
        return res.status(StatusCodes.OK).json({
            data:session,
            success:true,
            message: 'successfully logged in',
            error:{}
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'something went wrong',
            error:error
        });
    }
}

export default {
    signUp,
    signIn
}