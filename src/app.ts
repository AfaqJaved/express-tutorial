import express, { Request, Response } from "express"
import BookRouter from "./routes/book.route";
import RootRoute from "./routes/root.route";

const app = express();

// Express json middleware for parsing json to js object (req.body)
app.use(express.json());
app.use("/", RootRoute);


app.listen(5000, () => {
    console.log("Server has Started On Port 5000");

})
