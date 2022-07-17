
const express = require("express");

const router = express.Router();

const Book = require("../model/Book");

const booksController = require("../controllers/books-controller");

router.get("/",booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById); //id will be a part of the URL
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports = router;
