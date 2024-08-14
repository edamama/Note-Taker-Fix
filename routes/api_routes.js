const fs = require("fs");
const {v4: uuidv4 } = require("uuid");
const router = require("express").Router();


router.get("/api/notes", async (req,res) => {

    const jsonDb = await JSON.parse(fs.readFileSync("db/db.json"));
    res.json(jsonDb);

});

router.post("/api/notes",(req,res)=> {

    const jsonDb = JSON.parse(fs.readFileSync("db/db.json"));
    const newPost = {

        title:req.body.title,
        
        text: req.body.text,

        postId: uuidv4(),

    };

    jsonDb.push(newPost);
    fs.writeFileSync("db/db.json",JSON.stringify(jsonDb));
    res.json(jsonDb)

});