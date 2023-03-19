const checkMessage = (socket, next) => {
        if(socket[0] === 'message' && socket[1].message!==undefined){
            return next();
        }
        let err = new Error("Message is not valid");
        err.data = { message : 'Message is not valid' };
        next(err);
}

module.exports = {
    checkMessage
};