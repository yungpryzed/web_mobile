import jwt from 'jsonwebtoken';

export type JwtUserPayload = {
  userId: string;
  email: string;
  role: 'User' | 'Admin';
};

export const signToken = (payload: JwtUserPayload): string => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign(payload, secret, { expiresIn: '1d' });
};