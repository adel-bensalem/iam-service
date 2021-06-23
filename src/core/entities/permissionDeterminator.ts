import { Intent, Permission, Resource } from "@types";

function hasPermission(intent: string, permissions: Permission[]): boolean {
  const i = intent.toLowerCase();

  return !!permissions.find(
    (permission) =>
      (permission.canExecute && i === Intent.EXECUTE) ||
      (permission.canRead && i === Intent.READ) ||
      (permission.canWrite && i === Intent.WRITE)
  );
}

function squashPermissions(
  permissions: { resource: Resource; permission: Permission }[]
): { resource: Resource; permission: Permission }[] {
  const mappedPermissions = permissions.reduce<{ [key: string]: Permission }>(
    (mappedPermissions, { resource, permission }) => ({
      ...mappedPermissions,
      [resource.name]: !!mappedPermissions[resource.name]
        ? {
            canRead:
              mappedPermissions[resource.name].canRead || permission.canRead,
            canWrite:
              mappedPermissions[resource.name].canWrite || permission.canWrite,
            canExecute:
              mappedPermissions[resource.name].canExecute ||
              permission.canExecute,
          }
        : permission,
    }),
    {}
  );

  return Object.entries(mappedPermissions).reduce<
    { resource: Resource; permission: Permission }[]
  >(
    (squashedPermissions, [name, permission]) => [
      ...squashedPermissions,
      {
        resource: { name },
        permission,
      },
    ],
    []
  );
}

export { hasPermission, squashPermissions };
