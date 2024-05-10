import { EdgeDBAdapter } from '@auth/edgedb-adapter';
import { createClient } from 'edgedb';
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

import { env } from '@/env';

const client = createClient({ dsn: env.AUTH_EDGEDB_DSN });

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: EdgeDBAdapter(client),
  providers: [Github]
});

