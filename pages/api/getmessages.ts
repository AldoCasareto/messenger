import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../redis';
import { Chat } from '../../typings';

type Data = {
  messages: Chat[];
};

type ErrorData = {
  body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorData | Data>) {
  if (req.method !== 'GET') return res.status(405).json({ body: 'method not allowed' });

  const fetchMessages = await client.hvals('messages');

  const messages: Chat[] = fetchMessages
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at);

  res.status(200).json({ messages });
}
