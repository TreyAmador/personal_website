var express = require('express')
var router = express()


router.get('/router',function(req,res){
    res.send('at router')
})


module.exports = router
