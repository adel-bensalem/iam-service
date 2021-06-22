type UserPolicyGrantError = {
  wasPermissionDenied: boolean;
  wasUserNotFound: boolean;
  wasPolicyNotFound: boolean;
};

export { UserPolicyGrantError };
