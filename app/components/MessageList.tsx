'use client';

import { Chat } from '../../typings';
import { fetcher } from '../../utils/fetchMessages';
import useSWR from 'swr';
import Message from './Message';
import { clientPusher } from '../../pusher';
import { useEffect } from 'react';

type MessagesProps = {
  initialMessages: Chat[];
};

function MessageList({ initialMessages }: MessagesProps) {
  const { data: messages, error, mutate } = useSWR<Chat[]>('/api/getmessages', fetcher);

  useEffect(() => {
    const channel = clientPusher.subscribe('messages');

    channel.bind('new-message', async (data: Chat) => {
      if (messages?.find((message) => message.id === data.id)) return;
      if (!messages) await mutate(fetcher);

      await mutate(fetcher, {
        optimisticData: [data, ...messages!],
        rollbackOnError: true,
      });
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
      {(messages || initialMessages).map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
