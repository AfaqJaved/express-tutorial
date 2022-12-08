
import { Router, Request, Response } from "express";
import { BookRequestPayload } from "../request/book.request";
import BookService from "../services/book.service";


const BookRouter = Router();


BookRouter.get("/findAll", async (req: Request, res: Response) => {
    res.json(await BookService.findAllBooks());
})

BookRouter.post("/add", async (req: Request, res: Response) => {
    res.json(await BookService.addBook(req.body as BookRequestPayload));
})

BookRouter.get("/findById/:id", async (req: Request, res: Response) => {
    res.json(await BookService.findBookById(Number(req.params.id)));
})

BookRouter.get("/delete/:id", async (req: Request, res: Response) => {
    res.json(await BookService.deleteBook(Number(req.params.id)));
})



export default BookRouter;






// Express Router