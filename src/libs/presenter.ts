import { Response } from "express";
import { Presenter } from "@core";

function createPresenter(response: Response): Presenter {
  return {
    presentAccessibleResourcesRetrievalFailure(error): void {
      response.status(error.wasUserNotFound ? 404 : 500).send(error);
    },
    presentAccessibleResourcesRetrievalSuccess(resources): void {
      response.status(200).send(resources);
    },
    presentAccountRetrievalFailure(): void {
      response.sendStatus(404);
    },
    presentAccountRetrievalSuccess(user): void {
      response.status(200).send(user);
    },
    presentUserPermissionsRetrievalFailure(error): void {
      response
        .status(
          error.wasPermissionDenied ? 403 : error.wasUserNotFound ? 404 : 500
        )
        .send(error);
    },
    presentUserPermissionsRetrievalSuccess(permissions): void {
      response.status(200).send(permissions);
    },
    presentUserPermissionInsuranceFailure(error): void {
      response
        .status(
          error.wasPermissionDenied ? 403 : error.wasUserNotFound ? 404 : 500
        )
        .send(error);
    },
    presentUserPermissionInsuranceSuccess(): void {
      response.sendStatus(200);
    },
    presentGroupPermissionGrantFailure(error): void {
      response
        .status(
          error.wasPermissionDenied ? 403 : error.wasGroupNotFound ? 404 : 500
        )
        .send(error);
    },
    presentGroupPermissionGrantSuccess(group, resource, permission): void {
      response.status(200).send({
        group: { id: group.id, name: group.name },
        resource,
        permission,
      });
    },
    presentUserPolicyGrantFailure(error): void {
      response
        .status(
          error.wasPermissionDenied
            ? 403
            : error.wasUserNotFound || error.wasPolicyNotFound
            ? 404
            : 500
        )
        .send(error);
    },
    presentUserPolicyGrantSuccess(user, policy): void {
      response
        .status(200)
        .send({ user: { id: user.id, name: user.name }, policy });
    },
    presentGroupPolicyGrantFailure(error): void {
      response
        .status(
          error.wasPermissionDenied
            ? 403
            : error.wasGroupNotFound || error.wasPolicyNotFound
            ? 404
            : 500
        )
        .send(error);
    },
    presentGroupPolicyGrantSuccess(group, policy): void {
      response
        .status(200)
        .send({ group: { id: group.id, name: group.name }, policy });
    },
    presentUserPermissionGrantFailure(error): void {
      response
        .status(
          error.wasPermissionDenied ? 403 : error.wasUserNotFound ? 404 : 500
        )
        .send(error);
    },
    presentUserPermissionGrantSuccess(user, resource, permission): void {
      response
        .status(200)
        .send({ user: { id: user.id, name: user.name }, resource, permission });
    },
    presentUserFromGroupRemovalSuccess(user, group) {
      response.status(200).send({
        user: { id: user.id, name: user.name },
        group: { id: group.id, name: group.name },
      });
    },
    presentUserFromGroupRemovalFailure(error) {
      response
        .status(
          error.wasPermissionDenied
            ? 403
            : error.wasGroupNotFound || error.wasUserNotFound
            ? 404
            : 500
        )
        .send(error);
    },
    presentUserToGroupAdditionSuccess(user, group) {
      response.status(200).send({
        user: { id: user.id, name: user.name },
        group: { id: group.id, name: group.name },
      });
    },
    presentUserToGroupAdditionFailure(error) {
      response
        .status(
          error.wasPermissionDenied
            ? 403
            : error.wasGroupNotFound || error.wasUserNotFound
            ? 404
            : 500
        )
        .send(error);
    },
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
      response
        .status(
          error.unAuthorizedOperation
            ? 403
            : error.wasAccountNotFound
            ? 404
            : 500
        )
        .send(error);
    },
    presentPolicySetFailure(error): void {
      response
        .status(
          error.wasPermissionDenied ||
            error.arePolicyStatementsInvalid ||
            error.isPolicyNameInvalid
            ? 403
            : 500
        )
        .send(error);
    },
    presentPolicySetSuccess(policy): void {
      response.status(200).send(policy);
    },
  };
}

export { createPresenter };
