'use client';

import { Chat } from '../../typings';
import { fetcher } from '../../utils/fetchMessages';
import useSWR from 'swr';
import Message from './Message';

function MessageList() {
  const { data: messages, error, mutate } = useSWR<Chat[]>('/api/getmessages', fetcher);

  console.log(messages);

  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
