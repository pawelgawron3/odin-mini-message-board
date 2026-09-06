import Router from "express";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("newMessage", { title: "Create a new message" });
});

export default messageRouter;
