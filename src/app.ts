import express, { Request, Response } from "express"
import BookRouter from "./routes/book.route";
import RootRoute from "./routes/root.route";
import AppDataSource from "./database/db.config";

const app = express();

// Express json middleware for parsing json to js object (req.body)
app.use(express.json());
app.use("/", RootRoute);


AppDataSource.initialize().then(() => {
    console.log("Database has bee initilazied");

    app.listen(5000, () => {
        console.log("Server has Started On Port 5000");
    })

}).catch(() => {
    console.log("Database Initilization Failed!!");
})
