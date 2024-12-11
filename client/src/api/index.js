import axios from 'axios';

// Create an instance of axios with default configurations
const API = axios.create({
    baseURL: 'http://localhost:5000/',  // Adjust this to your backend server URL
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the token in every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');  // Retrieve the token from local storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;  // Append the token to the Authorization header
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor to handle global response errors
API.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
        console.log('Unauthorized, logging out...');
        // Handle logout or token refresh logic here
    }
    return Promise.reject(error);
});

export default API;
