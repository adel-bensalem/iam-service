type GroupCreationError = {
  wasPermissionDenied: boolean;
  doesGroupAlreadyExists: boolean;
  hasInvalidName: boolean;
};

export { GroupCreationError };
