import { IUser } from "./../repositories/user/interface";
declare global {
  namespace Express {
    export interface Request {
      validade: any;
      user: IUser;
    }
  }
}
