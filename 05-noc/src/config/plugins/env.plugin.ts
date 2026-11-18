import "dotenv/config";
import env from "env-var";

export const envConfig = {
  port: env.get("PORT").required().asPortNumber(),
  emailSender: env.get("EMAIL_SENDER").required().asEmailString(),
  emailSecretKey: env.get("EMAIL_SECRET_KEY").required().asString(),
};
