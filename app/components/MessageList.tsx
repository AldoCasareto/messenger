'use client';

import { Chat } from '../../typings';
import { fetcher } from '../../utils/fetchMessages';
import useSWR from 'swr';

function MessageList() {
  const { data: messages, error, mutate } = useSWR<Chat[]>('/api/getmessages', fetcher);

  return (
    <div>
      {messages?.map(({ message, id }) => (
        <div key={id}>
          <p>{message}</p>
          <p>hello</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
