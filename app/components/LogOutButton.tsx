'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

function LogOutButton() {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth/signin' })}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Logout
      </button>
    </>
  );
}

export default LogOutButton;
