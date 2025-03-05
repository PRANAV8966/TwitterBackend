import UserService from '../service/user-service.js'
const userService = new UserService();



import { StatusCodes } from 'http-status-codes';



const createUser = async (req, res) => {
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
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to create user',
            error:error
        });
    }
}
export default {
    createUser
}