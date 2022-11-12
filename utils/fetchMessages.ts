import { Chat } from '../typings';

export const fetcher = async () => {
  const res = await fetch('http://localhost:3001/api/getmessages');
  const data: Chat[] = await res.json();

  return data;
};
