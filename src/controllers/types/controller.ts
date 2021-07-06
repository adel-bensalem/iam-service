interface Controller {
  createUser(): void;
  authenticate(): void;
  createGroup(): void;
  addUserToGroup(): void;
  removeUserFromGroup(): void;
  grantUserPermission(): void;
  grantGroupPermission(): void;
  grantUserPolicy(): void;
  grantGroupPolicy(): void;
  ensureUserPermission(): void;
  retrieveUserPermissions(): void;
  retrieveAccount(): void;
  setPolicy(): void;
  retrieveAccessibleResources(): void;
}

export { Controller };
