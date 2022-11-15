import React from 'react';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getmessages`);
  return (
    <main>
      <main>
        <MessageList />
        <ChatInput />
      </main>
    </main>
  );
}

export default HomePage;
