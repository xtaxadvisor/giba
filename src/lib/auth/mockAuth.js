import { storeUser, clearStoredUser } from './storage';
import { validateLoginCredentials, validateRegistrationData } from './validation';
const users = [
// other type definitions
];
export async function mockLogin(credentials) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const errors = validateLoginCredentials(credentials);
    if (errors.length > 0) {
        throw new Error(errors[0]);
    }
    const user = users.find(u => u.email === credentials.email &&
        u.password === credentials.password);
    if (!user) {
        throw new Error('Invalid credentials');
    }
    if (user.role === 'admin' && !user.isAdmin) {
        throw new Error('Unauthorized access attempt');
    }
    const { password: _, ...safeUser } = user;
    storeUser(safeUser);
    return safeUser;
}
export async function mockLogout() {
    await new Promise(resolve => setTimeout(resolve, 500));
    clearStoredUser();
}
export async function mockRegister(data) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const errors = validateRegistrationData(data);
    if (errors.length > 0) {
        throw new Error(errors[0]);
    }
    const existingUser = users.find(u => u.email === data.email);
    if (existingUser) {
        throw new Error('User already exists');
    }
    if (data.role === 'admin') {
        throw new Error('Invalid role specified');
    }
    const newUser = {
        id: String(users.length + 1),
        email: data.email,
        password: data.password,
        role: data.role,
        isAdmin: false
    };
    users.push(newUser);
}
