const dbAccess = require("./dbAccess.js")
const messageRep = dbAccess.AppDataSource.getRepository("Message");

async function createMessage(message){
   return await messageRep.save(message)
}

async function getAllMessages(){
    return await messageRep.find({
         relations:['user'],
         order: {id: 'DESC'}
    });
}

async function getMessage(id){
    return await messageRep.findOne({
        where:{
            id 
        }, 
        relations:['user'] 
    });
}

async function deleteMessage(id){
    return await messageRep.delete({
        id
    });
}

async function updateMessage(id, data){
    return await messageRep.update({
        id
    }, data)
}

async function getRange(skip, take){
    const [result, total] = await messageRep.findAndCount({ 
        skip,
        take,
        relations:['user'],
        order: {id: 'DESC'}
    });

    return {
        data: result,
        total
    }
}

module.exports = {
    createMessage, 
    getMessage, 
    getAllMessages, 
    updateMessage, 
    deleteMessage,
    getRange
};