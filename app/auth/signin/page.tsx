import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import SignIn from '../../components/SignIn';

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className='grid justify-center'>
      <div>
        <Image
          className='rounded-full mx-2 object-cover'
          alt='logo'
          height={700}
          width={700}
          src='https://links.papareact.com/161'
        />
      </div>
      <SignIn providers={providers} />
    </div>
  );
}

export default SignInPage;
