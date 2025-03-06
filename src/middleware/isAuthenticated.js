import passport from "passport";
import { StatusCodes } from 'http-status-codes';

export const isAuthenticated = (req, res, next) => {

    passport.authenticate('jwt', (err, user) => {
        if (err) next(err);
        else if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:{},
                success: false,
                message: 'unauthorized access'
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}