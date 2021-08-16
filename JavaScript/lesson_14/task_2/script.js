export default function createMessenger() {
  const message = 'Just learn it';
  const sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${this.message}! Your ${this.sender}`);
  }

  function setMessage(newMessage) {
    this.message = newMessage;
  }

  function setSender(newSender) {
    this.sender = newSender;
  }

  return {
    message,
    sender,
    sendMessage,
    setMessage,
    setSender,
  };
}
