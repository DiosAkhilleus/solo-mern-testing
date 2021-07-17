const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String, 
    required: true,
  },
  foodGroup: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model('foodinfo', FoodSchema);

module.exports = Food;