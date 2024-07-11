export const logoutUser = () => {
    localStorage.removeItem('authToken');
    console.log('user logged out');
};

logoutUser();