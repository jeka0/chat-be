const EntitySchema = require('typeorm').EntitySchema
module.exports = new EntitySchema({
    name: "User", // Will use table name `User` as default behaviour.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true 
        },
        login: {
            type: "text",
            unique: true
        },
        password: {
            type: "text",
        },
    },
})