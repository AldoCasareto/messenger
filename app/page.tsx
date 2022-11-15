import React from 'react';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

export default function HomePage() {
  return (
    <div className='text-md'>
      <main>
        {/* @ts-ignore */}
        <MessageList />
        <ChatInput />
      </main>
    </div>
  );
}
