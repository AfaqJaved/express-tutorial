
import { Router, Request, Response } from "express";


const BookRouter = Router();


BookRouter.get("/findAll", (req: Request, res: Response) => {
    res.send("This route will send all the books");
})

BookRouter.post("/add", (req: Request, res: Response) => {
    res.send("This route will add the books");
})


export default BookRouter;






// Express Router