
import express from 'express';
import {axiosInstance} from '../utils/axios';
var router = express.Router();



//get page  entry with slug
router.get('/page/:slug', async function(req, res, next) {
  try {
    const data = await fetchData(req.params.slug);
    res.json(data);
  } catch (error) {
    res.json( error);
  }
});


async function fetchData(slug:string) {
  const params = {
    content_type : 'page',
    include :10 ,
    fields : {
      slug
    }
  }
  try {
    const response = await axiosInstance.get('/entries', {params});
    return response.data;
  } catch (error:any) {
    return {
      message : error.response.statusText, 
      status : error.response.status};
    }
}

export default router