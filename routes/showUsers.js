const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/showUsers', async(req, res) => {
    // fetching users data from external api
    // by using axios
    try{
        const page = parseInt(req.query.page) || 1;         
        const limit = parseInt(req.query.limit) || 5;
        const getRequest = await axios.get(`http://localhost:8000/getUsers?page=${page}&limit=${limit}`)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(error => {
            res.status(500).send('Something went wrong');
        })
    } 

    catch(error) {
        console.log(error);
        res.send({msg: error.message});
    }

})

module.exports = router;