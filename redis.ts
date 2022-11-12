import Redis from 'ioredis';

const password = process.env.REDIS_PASSWORD;

let client = new Redis(`redis://:${password}@global-many-mollusk-32025.upstash.io:32025`);

export default client;
