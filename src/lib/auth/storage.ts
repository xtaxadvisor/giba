
const USER_STORAGE_KEY = 'currentUser';

export function storeUser(user: LocalUser): void {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}
export interface LocalUser {
  id: string;
  email: string;
  isAdmin: boolean;
  role?: string;
}
export function getStoredUser(): LocalUser | null {
  const userData = localStorage.getItem(USER_STORAGE_KEY);
  return userData ? JSON.parse(userData) : null;
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_STORAGE_KEY);
}

export function isValidStoredUser(user: LocalUser): boolean {
  if (!user.id || !user.email) {
    return false;
  }

  if (user.role === 'admin' && !user.isAdmin) {
    return false;
  }

  return true;
}