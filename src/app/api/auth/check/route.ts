/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

async function verifyTokenAndGetUserData(token: string) {
  const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

  try {
    const decodedJWT = jwt.verify(token, JWT_SECRET);
    return decodedJWT;
  } catch (error) {
    throw `Token inválido - ${error}`;
  }
}

export async function GET() {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.json({ isAuthenticated: false });
  }

  try {
    const userData = await verifyTokenAndGetUserData(accessToken);

    return NextResponse.json({ isAuthenticated: true, userData });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false });
  }
}
