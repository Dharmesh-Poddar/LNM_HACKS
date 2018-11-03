const express = require('express');
const router = express.Router();


router.get("/movies", (req, res) => {
    res.render("movies/index");
});


router.get("/movies/index", (req, res) => {
    const searchTerm = req.query.name;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=c99295d4966e312cb3db1f56ddf2991b&query=" + searchTerm;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("movies/list", { data: data });
        }
    });
});

module.exports = router;