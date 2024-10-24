const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT ? process.env.PORT : '3000';
// new code below this line ---
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/weather', async (req, res) => {
    const zip = req.body.zip;
    const axios = require('axios');
    console.log(zip);
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=94252a33fb986aafd814e485bb54a7b0`,
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    res.render('weather/show.ejs', { data: response.data})

    })
    .catch((error) => {
    console.log(error);
    });
});
 
app.listen(3000, () => {
    console.log('The express app is ready!');
  });
