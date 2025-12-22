import express from "express";
import compression from "compression";

import createHtml from "./createHtml.js";

const app = express();
global.cwd = import.meta.dirname;
const html = await createHtml();

app.use(compression());
app.get("/", (req, res)=>{res.send(html)});
app.listen(8010);
