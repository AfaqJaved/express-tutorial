import express, { Request, Response } from "express"

const app = express();


// Controllers  Routes
// GET POST PUT DELETE
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome To Express Server With TS !!!");
});


app.listen(5000, () => {
    console.log("Server has Started On Port 5000");

})
