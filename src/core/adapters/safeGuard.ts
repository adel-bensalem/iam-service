interface SafeGuard {
  ensureUserPassword(password: string, accountPassword: string): Promise<void>;
}

export { SafeGuard };
