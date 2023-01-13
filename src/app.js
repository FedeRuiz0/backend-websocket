import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/views.router.js";


const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/realtimeproducts', function (req, res) {
  res.render('realTimeProducts', {});
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("iniciado con socket.io");
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));
app.use("/views", viewsRoute);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  });