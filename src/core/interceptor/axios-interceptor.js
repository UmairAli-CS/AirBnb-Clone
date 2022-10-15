import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    // config.headers['X-RapidAPI-Key'] = '1556fed07fmsh5b4cc6a702ff1efp1431fejsne442206cecdf';
    // config.headers['X-RapidAPI-Host'] = 'realty-mole-property-api.p.rapidapi.com';
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    try {
        return response;
    } catch (error) {
        return response;
    }

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance