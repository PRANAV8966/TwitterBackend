import CommentService from "../service/comment-service.js";
import { StatusCodes } from "http-status-codes";

const commentService = new CommentService();

const create = async (req, res) => {
    try {
        const comment = await commentService.create(req.body.content, req.body.userId, req.query.modelType, req.query.modelId);
        return res.status(StatusCodes.OK).json({
            data:comment,
            success:true,
            message:'successuflly created comment',
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to created comment',
            error:error
        });
    }
}

const getComments = async (req, res) => {
    try {
        const comments = await commentService.getAll();
        return res.status(StatusCodes.OK).json({
            data:comments,
            success:true,
            message:'successuflly fetched comments',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to fetch comments',
            error:error
        });
    }
}


const getComment = async (req, res) => {
    try {
        const comment = await commentService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data:comment,
            success:true,
            message:'successuflly fetched comment',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to fetch comment',
            error:error
        });
    }
}

export default {
    create,
    getComment,
    getComments
}