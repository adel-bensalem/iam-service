import { Intent, Permission } from "@types";

function hasPermission(intent: string, permissions: Permission[]): boolean {
  const i = intent.toLowerCase();

  return !!permissions.find(
    (permission) =>
      (permission.canExecute && i === Intent.EXECUTE) ||
      (permission.canRead && i === Intent.READ) ||
      (permission.canWrite && i === Intent.WRITE)
  );
}

export { hasPermission };
