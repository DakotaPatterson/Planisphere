import axios from 'axios';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('/api/users/login', credentials);
        return response.data;
    } catch (error) {
        console.error('error logging in user', error);
        throw error.response.data;
    }
};

const credentials = {
    email: '',
    password: ''
};

loginUser(credentials)
    .then(data => console.log('user logged in successfully', data))
    .catch(error => console.error('login error', error));

// do we need cookies for this?