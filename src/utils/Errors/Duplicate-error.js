class UserError extends Error {
    constructor( message, reason) {
        super();
        this.errorCode = 502;
        this.message = message;
        this.reason = reason;
    }
}

export default UserError;