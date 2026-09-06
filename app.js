import express from "express";

const messages = [
  {
    user: "Amando",
    text: "Hi there!",
    added: new Date(),
  },
  {
    user: "Charles",
    text: "Hello World!",
    added: new Date(),
  },
];

const app = express();

const PORT = process.env.PORT || 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

app.get("/new", (req, res) => {
  res.send("New message form route.");
});

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server is listening for requests on port ${PORT}`);
});
