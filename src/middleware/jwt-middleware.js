import JWT from 'passport-jwt';

import User from '../model/user-model.js';
import { JWT_KEY } from '../config/serverConfig.js';

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
};

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    }));
}