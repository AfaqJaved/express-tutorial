import express, { Request, Response } from "express"

const app = express();


// Controllers  Routes
// GET POST PUT DELETE
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome To Express Server With TS !!!");
});

app.post("/book/add", (req: Request, res: Response) => {
    res.send("This is book add request");
})


// All means all request type can be accepted
app.all("/allrequest", (req: Request, res: Response) => {
    res.send("All Request Type Can Be Accepted");
})

// Route Paths String Patterns
// abcd abccd ab3223FREARcd
app.get("/ab*cd", (req: Request, res: Response) => {
    res.send("String Patterns");
});


// Route Parameters
app.get("/params/:userName/:userId/:bookId", (req: Request, res: Response) => {
    console.log(req.params);
    res.json(req.params);
});





app.listen(5000, () => {
    console.log("Server has Started On Port 5000");

})
