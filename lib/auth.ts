import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export interface UserPayload {
  id: number;
  email: string;
  isAdmin: boolean;
}

export async function createToken(payload: UserPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifyToken(token: string): Promise<UserPayload | null> {
  try {
    const verified = await jwtVerify(token, secret);
    const payload = verified.payload;
    
    // Validate and extract the required fields
    if (
      typeof payload.id === 'number' &&
      typeof payload.email === 'string' &&
      typeof payload.isAdmin === 'boolean'
    ) {
      return {
        id: payload.id,
        email: payload.email,
        isAdmin: payload.isAdmin,
      };
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export async function getSession(): Promise<UserPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

export async function getSessionFromRequest(request: NextRequest): Promise<UserPayload | null> {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}
