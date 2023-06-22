import Message from '../Message/Message';

export default function MessagesList({ messages, setMessages }) {
  const removeMessage = id => {
    const data = [...messages];
    data.splice(id, 1);
    setMessages(data);
  };

  return (
    <ul className="messages-list">
      {messages.map(({ body, user: { username } }, idx) => (
        <li key={idx}>
          <Message
            text={body}
            name={username}
            id={idx}
            removeMessage={removeMessage}
          />
        </li>
      ))}
    </ul>
  );
}
