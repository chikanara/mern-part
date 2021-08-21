const { body, validationResult } = require('express-validator');


const registerRules = () => [
    body("name","Should not be empty").notEmpty(),
    body("lastName","Should not be empty").notEmpty(),
    body("email","Email is not valid").isEmail(),
    body("password","password should be at least 6 caracteres").isLength({min:6})

]
const loginRules = () => [
    body("email","Email is not valid").isEmail(),
    body("password","password should be at least 6 caracteres").isLength({min:6})

]



const validator = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }
    else {
        next()
    }
}
module.exports = {registerRules,validator,loginRules}