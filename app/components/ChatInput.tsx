'use client';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Chat } from '../../typings';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetchMessages';
import { unstable_getServerSession } from 'next-auth/next';

type SessionProps = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

function ChatInput({ session }: SessionProps) {
  const [chat, setChat] = useState('');
  const { data: messages, error, mutate } = useSWR<Chat[]>('/api/getmessages', fetcher);

  const handleChat = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!chat || !session) return;

    const message: Chat = {
      message: chat,
      id: uuid(),
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!,
    };
    const uploadMessage = async () => {
      const res = await fetch('/api/addmessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      return [data.message, ...(messages ?? [])];
    };

    await mutate(uploadMessage, {
      optimisticData: [message, ...(messages ?? [])],
    });
    setChat('');
  };

  return (
    <>
      <form
        className='flex px-10 py-5 space-x-2 border-t border-gray-100 bg-white'
        onSubmit={handleChat}
      >
        <label htmlFor='messageBox' />
        <input
          id='messageBox'
          disabled={!session}
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
    </>
  );
}

export default ChatInput;
