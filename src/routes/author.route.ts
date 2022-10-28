
import { Router, Request, Response } from "express";


const AuthorRouter = Router();


AuthorRouter.get("/findAll", (req: Request, res: Response) => {
    res.send("This route will send all the authors");
})

AuthorRouter.post("/add", (req: Request, res: Response) => {
    res.send("This route will add the author");
})


export default AuthorRouter;






// Express Router