import { Response } from "express";
import { Presenter } from "@core";

function createPresenter(response: Response): Presenter {
  return {
    presentUserCreationSuccess({ name, id }) {
      response.status(200).send({ name, id });
    },
    presentUserCreationFailure(error) {
      response
        .status(error.hasInvalidName || error.hasInvalidPassword ? 403 : 500)
        .send(error);
    },
    presentAuthenticationSuccess(token) {
      response.status(200).send({ token });
    },
    presentAuthenticationFailure(error) {
      response.status(error.unAuthorizedOperation ? 403 : 500).send(error);
    },
  };
}

export { createPresenter };
