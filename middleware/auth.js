const express = require("express");
const bodyParser = require("body-parser");
const Image = require("../models/Image");
const imgRoute = require('../routes/image');

const app = express();

app.use(bodyParser.json());
app.use('/api/images', (req, res, next) => {
  const stuff = [
    {
      _id: '1',
      title: 'Picture 1',
      description: 'Cotton Candy Clouds',
      imageUrl: 'https://www.pexels.com/photo/down-angle-photography-of-red-clouds-and-blue-sky-844297/'
    },
    {
      _id: '2',
      title: 'Picture 2',
      description: 'Lightning Strike',
      imageUrl: 'https://www.pexels.com/photo/photo-of-lightning-1114690/'
    },
    {
      _id: '3',
      title: 'Picture 3',
      description: 'White Winter',
      imageUrl: 'https://www.pexels.com/photo/trees-covered-with-snow-2331569/'
    },
    {
      _id: '4',
      title: 'Picture 4',
      description: 'Beautiful Summer Sunset' ,
      imageUrl: 'https://www.pexels.com/photo/calm-body-of-water-during-golden-hour-1631677/'
    },
    {
      _id: '5',
      title: 'Picture 5',
      description: 'Rainy Days ',
      imageUrl: 'https://www.pexels.com/photo/selective-focus-photo-of-obalte-green-leafed-plants-during-rain-1463530/'
    },
  ];
  res.status(200).json(images);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

