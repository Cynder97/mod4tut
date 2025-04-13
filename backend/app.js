const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())
const router = express.Router()

router.get("/songs", function(req, res){
    const song = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
        title: "Happy",
        artist: "Pharrell Williams",
        popularity: 10,
        releaseDate: new Date(2013, 11, 21),
        genre: ["soul", "new soul"]
        }
    ];

    res.json(song)

})

app.use("/api", router)
app.listen(3000)