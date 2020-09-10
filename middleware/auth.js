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
      description: 'Baby blessing with the girls',
      imageUrl: ''
    },
    {
      _id: '2',
      title: 'Picture 2',
      description: 'Girls night out',
      imageUrl: ''
    },
    {
      _id: '3',
      title: 'Picture 3',
      description: 'Day out by the dam',
      imageUrl: ''
    },
    {
      _id: '4',
      title: 'Picture 4',
      description: 'Cerys Birthday' ,
      imageUrl: ''
    },
    {
      _id: '5',
      title: 'Picture 5',
      description: 'Fairwell for Pauline ',
      imageUrl: ''
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

