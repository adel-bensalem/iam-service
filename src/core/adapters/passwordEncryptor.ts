interface PasswordEncryptor {
  encryptPassword(password: string): Promise<string>;
}

export { PasswordEncryptor };
