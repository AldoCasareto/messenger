'use client';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Chat } from '../../typings';

function ChatInput() {
  const [chat, setChat] = useState('');

  const handleChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message: Chat = {
      chat,
      id: uuid(),
      created_at: Date.now(),
      username: 'aldo',
      profilePic: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png',
      email: 'acasareto@gmail.com',
    };

    const uploadMessage = async () => {
      const res = await fetch('/api/addmessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      console.log(res);
      const data = await res.json();
      console.log('message added', data);
    };
    uploadMessage();
    setChat('');
  };

  return (
    <form className='flex px-10 py-5 space-x-2 border-t border-gray-100' onSubmit={handleChat}>
      <label htmlFor='messageBox' />
      <input
        id='messageBox'
        value={chat}
        placeholder='type your message'
        onChange={(e) => setChat(e.target.value)}
        type='text'
        className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
      />
      <button
        disabled={!chat}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
        type='submit'
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;