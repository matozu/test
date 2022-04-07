import express from "express";
const app = express();
app.use(express.static("public"));
import path from "path";
import { fileURLToPath } from "url";

const port = process.env.PORT || 5000;
app.get("/*", (req, res) => {
  res.sendFile("public/index.html", {
    root: path.dirname(fileURLToPath(import.meta.url)),
  });
});
app.listen(port, () => {
  console.log("listen on port" + port);
});
