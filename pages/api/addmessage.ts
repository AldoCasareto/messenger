import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../redis';
import { Chat } from '../../typings';

type Data = {
  message: Chat;
};

type ErrorData = {
  body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorData | Data>) {
  console.log('req.method', req.method);
  if (req.method !== 'POST') return res.status(405).json({ body: 'method not allowed' });

  const { message } = req.body;
  const newMessage = { ...message, created_at: Date.now() };

  await client.hset('messages', message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}
