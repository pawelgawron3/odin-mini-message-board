import Router from "express";

const indexRouter = Router();

let lastUsedID = 1;
const messages = [
  {
    id: 0,
    user: "Amando",
    text: "Hi there!",
    added: new Date(),
  },
  {
    id: 1,
    user: "Charles",
    text: "Hello World!",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

indexRouter.get("/messageDetails/:id", (req, res) => {
  const messageId = Number(req.params.id);

  const message = messages.find((message) => message.id === messageId);

  res.render("messageDetails", { message });
});

indexRouter.post("/", (req, res) => {
  const newMessage = {
    id: ++lastUsedID,
    user: req.body.messageUser,
    text: req.body.messageText,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
});

export default indexRouter;
