import { Chat } from '../typings';

export const fetcher = async () => {
  const res = await fetch('http://localhost:3001/api/getmessages');
  const data = await res.json();
  const messages: Chat[] = data.messages;

  return messages;
};
