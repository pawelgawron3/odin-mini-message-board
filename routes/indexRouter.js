import Router from "express";

const indexRouter = Router();

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

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

export default indexRouter;
