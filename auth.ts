import { EdgeDBAdapter } from '@auth/edgedb-adapter';
import { createClient } from 'edgedb';
import NextAuth from 'next-auth';

const client = createClient({ dsn: process.env.AUTH_EDGEDB_DSN });

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: EdgeDBAdapter(client),
  providers: []
});

