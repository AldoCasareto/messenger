import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  const session = true;
  return (
    <header className='sticky top-0 z-50 bg-white justify-center items-center p-10 shadow-sm'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex space-x-2 items-center'>
          <Image alt='logo' height={10} width={50} src='https://links.papareact.com/jne' />
          <div className='text-blue-400'>Welcome to Messenger</div>
        </div>
        <Link
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          href='/auth/signin'
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}

export default Header;
