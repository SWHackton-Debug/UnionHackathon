var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/translate',async(req,res,next)=>{
  console.log(req.body);
  const options = {
    uri: 'https://openapi.naver.com/v1/papago/n2mt',
    method: 'POST',
    headers: {
      //POST /v1/papago/n2mt HTTP/1.1:a  dsaf
      HOST: '*.openapi.naver.com',
      'User-Agent': 'curl/ 7.49.1',
      Accept: '*/*',
      //Content-Type: application/x-www-form-urlencoded; charset=UTF-8
      'X-Naver-Client-Id': 'CZT9jWoaShk_htg3mesv',
      'X-Naver-Client-Secret': 'UDzeiNQxVW',
      //Content-Length: 51
    },
    json:true,
    body: {
      source: req.body.source,
      target: req.body.target,
      text: req.body.text,
    }
  };

  await request.post(options, (err, response, body) => {
    if(err)res.status(400).json(err)
    else res.status(200).send(body)
  })
})
module.exports = router;
