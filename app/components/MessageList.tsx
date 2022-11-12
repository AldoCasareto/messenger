import React from 'react';

function MessageList() {
  const messages = [
    { message: 'hello', user: 'aldo' },
    { message: 'poronga', user: 'raul' },
    { message: 'mateus', user: 'plopo' },
  ];

  return (
    <div>
      {messages.map(({ message, user }) => (
        <div>
          <p>{message}-</p>
          <p>{user}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
