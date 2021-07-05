const Book= require('../models/Book');

module.exports.getAll=(req,res,next)=>{
    res.status(200).json(Book.getAll())
}

// module.exports.save=(req,res,next)=>{

//     //id, title, ISBN, publishedDate, author
//     const books = new Book(null,req.body.title,req.body.isbn,req.body.publishedDate,req.body.author).save();
//     res.json(books.save());

// }

exports.save = (req, res, next) => {
    const book = req.body;
    console.log(book)
    const savedBook = new Book(null, book.title, book.isbn, book.publishedDate, book.author).save();
    res.json(savedBook);
}

exports.getBookById = (req,res,next)=>{
    res.status(200).json(Book.findById(req.params.bookId))
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.params.bookId, book.title, book.isbn, book.publishedDate, book.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}