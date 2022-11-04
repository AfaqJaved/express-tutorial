import { Router } from "express";


// All Root Routes (Resources)
import BookRouter from "./book.route";



// Root Routes all the resource


const RootRoute = Router();


RootRoute.use("/book", BookRouter);


export default RootRoute;