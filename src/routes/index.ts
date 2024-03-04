
import express from 'express';
var router = express.Router();
import {axiosInstance} from '../utils/axios'

router.get('/types', async function(req, res, next) {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    res.json( error);
  }
});


async function fetchData() {
  try {
    const response = await axiosInstance.get('/content_types');
    return response.data;
  } catch (error:any) {
    return {
      message : error.response.statusText, 
      status : error.response.status};
    }
}


export default router