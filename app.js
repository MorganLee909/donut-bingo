import express from "express";
import compression from "compression";
import mongoose from "mongoose";
import cors from "cors";
import {WebSocketServer} from "ws";
import http from "http";

import routes from "./routes.js";
import websockets from "./websockets.js";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({server, path: "/ws"});
mongoose.connect("mongodb://127.0.0.1/bingo");

app.use(compression());
app.use(express.json());
app.use(cors());

websockets(wss);

routes(app);
app.listen(8000);
