declare namespace Express {
  export interface Request {
    user: any;
    session: any
  }
}

interface TokenData {
  userId: string | null;
  sessionId?: string
}
