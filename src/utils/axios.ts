

import axios from 'axios'
import {API_BASE_URL,CONTENTFUL_SPACEID,CONTENTFUL_ENVIRONMENT,CONTENTFUL_ACCESS_TOKEN} from '../common/constants'


  export const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/spaces/${CONTENTFUL_SPACEID}/environments/${CONTENTFUL_ENVIRONMENT}`
  });

  axiosInstance.interceptors.request.use(config => {
    config.paramsSerializer = {
      dots : true
    }
    return config;
  });
  

  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${CONTENTFUL_ACCESS_TOKEN}`;
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

