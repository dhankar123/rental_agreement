import express from "express";
const app = express();

app.use(express.static("public"));  // 'public' is your folder with HTML files

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
