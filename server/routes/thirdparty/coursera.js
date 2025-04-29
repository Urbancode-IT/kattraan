const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/get-courses', (req, res) => {
  const options = {
    method: 'GET',
    hostname: 'collection-for-coursera-courses.p.rapidapi.com',
    port: null,
    path: '/rapidapi/course/get_course.php?page_no=1&course_institution=Yale%20University',
    headers: {
      'x-rapidapi-host': 'collection-for-coursera-courses.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY // Put this in .env
    }
  };

  const request = https.request(options, function (response) {
    const chunks = [];

    response.on('data', function (chunk) {
      chunks.push(chunk);
    });

    response.on('end', function () {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString()));
    });
  });

  request.end();
});

module.exports = router;
