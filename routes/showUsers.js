const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/showUsers', async(req, res) => {
    // fetching useraccount data using axios
    const getRequest = await axios.get('http://localhost:8000/getUsers')
    .then(response => {
        // console.log(response.data);
        res.status(200).send(response.data);
    })
    .catch(error => {
        console.log("Error: ", error);
    })
    

})

module.exports = router;