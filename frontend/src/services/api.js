import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 1000, // Request timeout setting
    headers: {'Content-Type': 'application/json'}
});

// Example API service function to fetch data
export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Example API service function to post data
export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Export the axios instance for manual requests if needed
export default api;