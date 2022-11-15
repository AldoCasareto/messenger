import React from 'react';
import { Chat } from '../typings';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

async function HomePage() {
  const URL = process.env.VERCEL_URL || 'http://localhost:3000';

  const res = await fetch(`${URL}/api/getmessages`);
  const data = await res.json();
  const messages: Chat[] = data.messages;

  return (
    <main>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput />
      </main>
    </main>
  );
}

export default HomePage;
