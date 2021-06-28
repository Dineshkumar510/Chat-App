const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send({Response: "Server is up & running"}).status(200);
});

module.exports = router;