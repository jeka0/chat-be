const EntitySchema = require('typeorm').EntitySchema
module.exports = new EntitySchema({
    name: "Message",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true 
        },
        message:{
            type: "text"
        },
        datetime: {
            type: "date"
        },
    },
    relations: {
        user: {
            target: "User",
            type: "many-to-one",
            joinTable: true,
            cascade: true,
        }
    },
})