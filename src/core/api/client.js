import axios from 'axios';
import axiosRetry from 'axios-retry';

//Instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
})

//Smart Retry
axiosRetry(apiClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay, //200ms, 400ms, 800ms and so on
  retryCondition: (error)=> {
    // only retry if it's a network error or a 500+ server error
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status >= 500;
  }
})

// Interceptors
apiClient.interceptors.request.use(
  (config)=>{
    const token = localStorage.getItem('token');
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`[API] ${config.method.toUpperCase()} to ${config.url}`);
    return config;
  },
  (error)=> Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response)=>response,
  (error)=>{
    const status = error.response?.status;

    if(status === 401){
      console.error("Unauthorized! Redirecting...");
    }

    if(status === 429){
      console.warn("Rate limited! Slow down");
    }

    return Promise.reject(error);
  }
)

export default apiClient;