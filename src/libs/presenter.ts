import { Response } from "express";
import { Presenter } from "@core";

function createPresenter(response: Response): Presenter {
  return {
    presentUserCreationSuccess({ name, id }) {
      response.status(200).send({ name, id });
    },
    presentUserCreationFailure(error) {
      response
        .status(
          error.hasInvalidName ||
            error.hasInvalidPassword ||
            error.doesUserAlreadyExists ||
            error.wasPermissionDenied
            ? 403
            : 500
        )
        .send(error);
    },
    presentGroupCreationSuccess({ name, id }) {
      response.status(200).send({ name, id });
    },
    presentGroupCreationFailure(error) {
      response
        .status(
          error.hasInvalidName ||
            error.doesGroupAlreadyExists ||
            error.wasPermissionDenied
            ? 403
            : 500
        )
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
