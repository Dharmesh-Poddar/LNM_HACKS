const express = require("express");
const app = express();




//mongoose.connect("mongodb://localhost:27017/movie_guide", { useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});


app.listen(3000, () => {
    console.log("Server has started !!");
})