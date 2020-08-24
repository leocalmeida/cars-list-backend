import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  resquest: Request,
  response: Response,
  next: NextFunction
): void {
  //Validacao toker jwt
  const authHeader = resquest.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing");
  }
  const [, token] = authHeader.split(" ");

  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    request.admin = {
      email: sub,
    };

    return next();
  } catch {
    throw new Error("Invalid JWT Token");
  }
}
