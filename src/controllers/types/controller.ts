interface Controller {
  createUser(): void;
  authenticate(): void;
  createGroup(): void;
  addUserToGroup(): void;
  removeUserFromGroup(): void;
}

export { Controller };
