const typeorm = require("typeorm")
require('dotenv').config()

const AppDataSource = new typeorm.DataSource({
    type : process.env.BD_TYPE,
    host : process.env.BD_HOST,
    port : process.env.BD_PORT,
    username : process.env.BD_USERNAME,
    password : process.env.BD_PASSWORD,
    synchronize: false,
    entities: [
        require("../entity/User.js"),
        require("../entity/Message.js")
    ],
    migrations: ["migration/**/*.js"],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration"
     }

})

module.exports = {
    AppDataSource
};