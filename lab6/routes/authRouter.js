const express = require("express")


const usercontroller = require("../controllers/usercontroller")

const router = express.Router();

router.post ( "/login",usercontroller.login)
router.use(usercontroller.authorize)




module.exports= router;