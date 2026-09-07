let nextId = 2;

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

export function getMessages() {
  return messages;
}

export function getMessageById(id) {
  return messages.find((message) => message.id === id);
}

export function addMessage(user, text) {
  const newMessage = {
    id: nextId++,
    user,
    text,
    added: new Date(),
  };

  messages.push(newMessage);

  return newMessage;
}
