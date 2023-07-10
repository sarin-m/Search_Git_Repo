var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search/repo', async (req, res) => {
  const { searchQuery } = req.body;
  if (!searchQuery) {
    return res.status(400).send({ status: 'No search query provided' });
  }
  console.log('search...query////',searchQuery);
  const url = `http://api.github.com/search/repositories?q=${searchQuery}`;
  console.log('url...',url)
  try {
    let response = await axios.get(url);
    if (response && response.status === 503) {
      res.status(500).send({ status:'Internal Server Error', data:[] });
    }
    else if (response && response.data && response.data.items) {
      console.log('response....',response.data)
      console.log('response....',response.data)
      res.send({ status:'OK', data:response.data.items });
    } else {
      res.status(404).send({ status:'Not Available', data:[] });
    }
  } catch (error) { 
    console.log('error....',error)
    res.status(500).send({ status: 'Server Error' });
  }
});

module.exports = router;
