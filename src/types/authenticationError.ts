type AuthenticationError = {
  wasAccountNotFound: boolean;
  unAuthorizedOperation: boolean;
  hasUnExpectedError: boolean;
};

export { AuthenticationError };
