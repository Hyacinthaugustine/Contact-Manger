import { userSignInDetails } from ".";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email?: string;
        userName?: string;
      };
    }
  }
}

export {};
