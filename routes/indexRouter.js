import Router from "express";
import { getMessages, getMessageById, addMessage } from "../data/messages.js";
import formatDate from "../helpers/formatDate.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: getMessages(),
    formatDate,
  });
});

indexRouter.get("/messageDetails/:id", (req, res) => {
  const message = getMessageById(Number(req.params.id));

  res.render("messageDetails", { message, formatDate });
});

indexRouter.post("/", (req, res) => {
  addMessage(req.body.messageUser, req.body.messageText);

  res.redirect("/");
});

export default indexRouter;
