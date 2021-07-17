const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserModel = require('./models/User');
const FoodModel = require('./models/Food');
require('dotenv').config();

const PORT = process.env.PORT;
const DB = process.env.DB;

app.use(express.json());
app.use(cors());
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(console.log('connected to db'));

app.post('/insertuser', async (req, res) => {
  const userName = req.body.userName;
  const friends = req.body.friends;
  const user = new UserModel ({
    userName: userName,
    friends: friends,
  });
  try {
    await user.save();
  } catch (err) {
    console.error(err);
  }
  res.writeHead(200, { 'Content-Type': 'test/html' });
  res.end('Posted User');
})
app.post('/insertfood', async (req, res) => {
  const foodName = req.body.foodName;
  const foodGroup = req.body.foodGroup;
  const food = new FoodModel ({
    foodName: foodName,
    foodGroup: foodGroup,
  });
  try {
    await food.save();
  } catch (err) {
    console.error(err);
  }
  res.writeHead(200, { 'Content-Type': 'test/html' });
  res.end('Posted Food');
})

app.get('/getusers', async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT}`);
});
