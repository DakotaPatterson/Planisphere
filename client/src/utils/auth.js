import decode from 'jwt-decode';

class AuthService {

  getToken() {
    return localStorage.getItem('id_token');
  }

  getProfile() {
    const token = this.getToken();
    return token ? decode(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true; // Consider expired if decoding fails
    }
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

const authService = new AuthService();

export default authService;
