const serverEnv = {
  port: process.env.PORT,
  allowedOrigins: process.env.ALLOWED_ORIGINS || "*",
  redis: process.env.REDIS_URL,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  environment: process.env.NODE_ENV || "development",
  isProduction:
    process.env.NODE_ENV === "production" || process.env.NODE_ENV?.startsWith("prod") || false,
  databaseUrl: process.env.DATABASE_URL,
  resend: process.env.RESEND_KEY!,
};

export default serverEnv;
