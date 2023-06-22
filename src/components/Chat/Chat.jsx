import { useEffect, useState } from 'react';
import MessagesList from '../MessageList/MessagesList';
import MainInput from '../MainInput/MainInput';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/comments?limit=3&skip=${Math.random() * 113}`)
      .then(el => el.json())
      .then(el => setMessages(el.comments))
      .catch(el => console.log(el));
  }, []);

  return (
    <div className="chat">
      <MessagesList messages={messages} setMessages={setMessages} />
      <MainInput setMessages={setMessages} />
    </div>
  );
}
