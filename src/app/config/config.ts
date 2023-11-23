import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  url: process.env.DATABASE_URL,
  bcrypt_saltRounds: process.env.BCRYPT_SALT_ROUNDS,
};
