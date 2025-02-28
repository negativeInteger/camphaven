const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/camphaven', {
})
.then(() => {    
    console.log("MONGO CONNECTION OPEN!!!");
})      
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
});

const campgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', campgroundSchema);