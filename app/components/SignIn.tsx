'use client';
import { getProviders, signIn } from 'next-auth/react';

type ProviderProps = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignIn({ providers }: ProviderProps) {
  return (
    <div className='flex justify-center'>
      {Object.values(providers ?? []).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || 'http://localhost:3000',
              })
            }
          >
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignIn;
