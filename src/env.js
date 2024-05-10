/* eslint-disable unicorn/prevent-abbreviations */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    // NEXT_PUBLIC_CLIENT_VAR: z.string(),
  },
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    AUTH_EDGEDB_DSN: z.string().url(),
    AUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string() : z.string().url()
    ),
    AUTH_SECRET: process.env.NODE_ENV === 'production' ? z.string() : z.string().optional(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
    EDGEDB_DSN: process.env.NODE_ENV === 'development' ? z.string().optional() : z.string(),
    EDGEDB_CLIENT_TLS_SECURITY:
      process.env.NODE_ENV === 'development' ? z.string().optional() : z.string(),
    EDGEDB_CLIENT_SECURITY:
      process.env.NODE_ENV === 'development' ? z.string() : z.string().optional()
  },
  runtimeEnv: {
    // Client
    // NEXT_PUBLIC_CLIENT_VAR: process.env.NEXT_PUBLIC_CLIENT_VAR,
    // Server
    NODE_ENV: process.env.NODE_ENV,
    AUTH_EDGEDB_DSN: process.env.AUTH_EDGEDB_DSN,
    AUTH_URL: process.env.AUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    EDGEDB_DSN: process.env.EDGEDB_DSN,
    EDGEDB_CLIENT_TLS_SECURITY: process.env.EDGEDB_CLIENT_TLS_SECURITY,
    EDGEDB_CLIENT_SECURITY: process.env.EDGEDB_CLIENT_SECURITY
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * Useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true
});

