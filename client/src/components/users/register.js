import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/users/register', userData);
        return response.data;
    } catch (error) {
        console.error('error registering user', error);
        throw error.response.data;
    }
};

const newUser = {
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
};

registerUser(newUser)
    .then(data => console.log('user registered successfully', data))
    .catch(error => console.error('registration error', error));

// do we need cookies for this?