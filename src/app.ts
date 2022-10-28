import express, { Request, Response } from "express"
import BookRouter from "./routes/book.route";
import RootRoute from "./routes/root.route";

const app = express();

app.use("/", RootRoute);


app.listen(5000, () => {
    console.log("Server has Started On Port 5000");

})
