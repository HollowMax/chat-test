export default function Message({ text, name, id, removeMessage }) {
  const usersNames = name.split(' ');

  const deleteMessage = el => {
    el.preventDefault();
    removeMessage(id);
  };

  return (
    <div className="message">
      <div className="message__avatar-container">
        <div className="message__avatar-img">
          <p>
            {usersNames.length === 1
              ? usersNames[0].slice(0, 1).toUpperCase()
              : (usersNames[0][0] + usersNames[1][0]).toUpperCase()}
          </p>
        </div>
        <div className="message__avatar-name">
          <p>{name}</p>
        </div>
      </div>
      <p>{text}</p>
      <button
        className="message__delete-btn"
        onClick={deleteMessage}
        type="button"
      >
        x
      </button>
    </div>
  );
}
