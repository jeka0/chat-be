const { Joi, Segments } = require('celebrate');

const userId = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}

const update = {
    [Segments.BODY]: Joi.object().keys({
        login: Joi.string(),
        password: Joi.string()
    }).required().min(1),
}

module.exports = { userId, update }