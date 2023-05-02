import { env } from 'process';

console.log(env.JWT_SECRET);
export const jwtConstants = {
  secret: env.JWT_SECRET,
};
