import { Router } from "express";


// All Root Routes (Resources)
import BookRouter from "./book.route";
import AuthorRouter from "./author.route";



// Root Routes all the resource


const RootRoute = Router();


RootRoute.use("/book", BookRouter);
RootRoute.use("/author", AuthorRouter);


export default RootRoute;