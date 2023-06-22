import { useEffect, useState } from 'react';

export default function MainInput({ setMessages }) {
  const [messageData, setMessageData] = useState('');

  useEffect(() => {
    setMessageData(localStorage.getItem('message'));
  }, []);

  const sendMessage = e => {
    e.preventDefault();
    setMessageData('');
    localStorage.setItem('message', '');
    setMessages(prevState => [
      {
        body: e.target.form.message.value,
        user: { username: 'You' },
      },
      ...prevState,
    ]);
  };

  const onTextChange = e => {
    setMessageData(e.target.value);
    localStorage.setItem('message', e.target.value);
  };

  return (
    <form className="input" name="message-form" noValidate>
      <textarea
        value={messageData}
        onChange={onTextChange}
        name="message"
        className="input__text-area"
        placeholder="Enter your message."
      ></textarea>
      <button
        onClick={sendMessage}
        name="send-btn"
        className="input__btn"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
