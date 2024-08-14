const express = require("express");

const html = require("./routes/html_routes.js");
const api_routes = require("./routes/api_routes.js");


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html);
app.use(api_routes);


app.listen(PORT, ()=> {

    console.log(`We are up at http:localhost:${PORT}`);

});


