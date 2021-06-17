import { Controller } from "@controllers";

declare global {
  declare namespace Express {
    export interface Request {
      controller: Controller;
    }
  }
}
