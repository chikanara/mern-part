const { register, login, getCurrentUser } = require("../controllers/userCtrl")
const { registerRules, validator, loginRules } = require("../middleware/bodyValidator")
const isAuth = require("../middleware/isAuth")

const router = require("express").Router()

router.post("/register",registerRules(),validator,register)
router.post("/login",loginRules(),validator,login)
router.get("/current",isAuth,getCurrentUser)


module.exports = router