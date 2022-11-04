
import { Router, Request, Response } from "express";
import { BookRequestPayload } from "../request/book.request";
import BookService from "../services/book.service";


const BookRouter = Router();


BookRouter.get("/findAll", (req: Request, res: Response) => {
    res.json(BookService.findAllBooks());
})

BookRouter.post("/add", (req: Request, res: Response) => {
    res.json(BookService.addBook(req.body as BookRequestPayload));
})

BookRouter.get("/findById/:id", (req: Request, res: Response) => {
    res.json(BookService.findBookById(Number(req.params.id)));
})

BookRouter.get("/delete/:id", (req: Request, res: Response) => {
    res.json(BookService.deleteBook(Number(req.params.id)));
})



export default BookRouter;






// Express Router