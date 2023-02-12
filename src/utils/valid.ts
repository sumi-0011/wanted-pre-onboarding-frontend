export const validEmail = (email: string): boolean => email.includes('@');
export const validPassword = (password: string): boolean =>
  password.length >= 8;
