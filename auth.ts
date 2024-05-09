import { EdgeDBAdapter } from '@auth/edgedb-adapter';
import { createClient } from 'edgedb';
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

const client = createClient({ dsn: process.env.AUTH_EDGEDB_DSN });

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: EdgeDBAdapter(client),
  providers: [Github]
});

