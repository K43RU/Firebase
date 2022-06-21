const express = require("express");

const router = require("./router");

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(8080, () => {console.log("app listen on http://localhost:8080")});