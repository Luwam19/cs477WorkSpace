const express= require("express")
const bookController= require('../controllers/Bookcontroller')
const router = express.Router();

router.get('/books',bookController.getAll);
router.post("/books",bookController.save)
router.get('/books/:bookId', bookController.getBookById);
router.put('/books/:bookId', bookController.update)
router.delete('/books/:bookId', bookController.deleteById);

module.exports= router;