const express= require("express")

const bookController= require('../controllers/Bookcontroller')
const usercontroller= require("../controllers/usercontroller")
const router = express.Router();

router.get('/books',bookController.getAll);
router.post("/books",usercontroller.authorizeAdmin,bookController.save)
router.get('/books/:bookId', bookController.getBookById);
router.put('/books/:bookId',usercontroller.authorizeAdmin, bookController.update)
router.delete('/books/:bookId',usercontroller.authorizeAdmin, bookController.deleteById);

module.exports= router;