type UserCreationError = {
  wasPermissionDenied: boolean;
  doesUserAlreadyExists: boolean;
  hasInvalidName: boolean;
  hasInvalidPassword: boolean;
};

export { UserCreationError };
