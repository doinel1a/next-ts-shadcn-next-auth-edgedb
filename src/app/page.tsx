import React from 'react';

import { auth } from 'auth';
import Link from 'next/link';

import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const session = await auth();

  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/next-ts-shadcn-next-auth-edgedb'
      />

      {session?.user?.name && (
        <h1 className='mb-2.5 text-3xl font-bold'>Welcome {session.user.name}</h1>
      )}

      <Counter />

      <Button variant={session ? 'destructive' : 'default'} className='mt-5' asChild>
        <Link href={session ? '/api/auth/signout' : '/api/auth/signin'}>
          {session ? 'Sign out' : 'Sign in'}
        </Link>
      </Button>
    </main>
  );
}
