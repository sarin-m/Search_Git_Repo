var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search/repo', async (req, res) => {
  const { searchQuery } = req.body;

  // Check if searchQuery exists
  if (!(searchQuery.trim())) {
    return res.status(400).send({ status: 'No search query provided' });
  }

  // Construct the URL for the GitHub API search endpoint
  const url = `http://api.github.com/search/repositories?q=${searchQuery}`;

  try {
    // Make a GET request to the GitHub API
    let response = await axios.get(url);

    // Check if the response indicates a service unavailable error (503)
    if (response && response.status === 503) {
      res.status(500).send({ status: 'Internal Server Error', data: [] });
    }
    // Check if the response has valid data with items
    else if (response && response.data && response.data.items) {
      res.send({ status: 'OK', data: response.data.items });
    } else {
      // If no valid data found, return a not available response
      res.status(404).send({ status: 'Not Available', data: [] });
    }
  } catch (error) {
    // Handle any errors during the request
    return res.status(500).send({ status: 'Server Error, Please try again after sometime.' });
  }
});

module.exports = router;
