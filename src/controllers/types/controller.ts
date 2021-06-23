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
  setPolicy(): void;
}

export { Controller };
