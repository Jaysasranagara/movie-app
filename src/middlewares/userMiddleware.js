const joi = require ('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userMiddleware = {}

userMiddleware.register = (async (req,res,next) => {
    const userSchema = joi.object({
        email: joi.string().email(),
        password: joi.string(),
        name: joi.string(),
        user_img:joi.string()
    })

    const {error} = await userSchema.validate(req.body)

    if(error) {
        res.status(400).send({
            status: 400,
            message: error.details[0].message
        })
    }
    
    next()

    
})

userMiddleware.validateLogin = async (req, res, next) => {
    const loginSchema = joi.object({
        username: joi.string().require(),
        password: joi.string().require(),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
        res.status(400).send({
            status: 400
            message: error.details[0].message,
            data: null
        });
    }

    next();
};

module.exports = userMiddleware;