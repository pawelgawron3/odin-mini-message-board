import Router from "express";
import { getMessages, getMessageById, addMessage } from "../data/messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: getMessages() });
});

indexRouter.get("/messageDetails/:id", (req, res) => {
  const message = getMessageById(Number(req.params.id));

  res.render("messageDetails", { message });
});

indexRouter.post("/", (req, res) => {
  addMessage(req.params.messageUser, req.params.messageText);

  res.redirect("/");
});

export default indexRouter;
