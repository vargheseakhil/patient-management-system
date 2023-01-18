export function logoutUser() {
    sessionStorage.removeItem('logged-in-user');
    sessionStorage.removeItem('session-token');
}