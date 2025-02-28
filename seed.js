const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/camphaven', {
})          
.then(() => {    
    console.log("MONGO CONNECTION OPEN!!!");
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
});     

// Campground.deleteMany({})
// .then(() => {   
//         console.log("DELETED ALL CAMPGROUNDS");
// })

const dummyCampgrounds = [
    { title: "Sunset Haven", price: "25", description: "A peaceful retreat near the lake.", location: "California" },
    { title: "Mountain Bliss", price: "40", description: "Nestled between tall pine trees.", location: "Colorado" },
    { title: "Ocean Breeze", price: "30", description: "A seaside escape with stunning views.", location: "Florida" },
    { title: "Desert Mirage", price: "20", description: "Camp under the stars in the desert.", location: "Arizona" },
    { title: "Forest Edge", price: "35", description: "Nature at its best with hiking trails.", location: "Washington" },
    { title: "River Bend", price: "28", description: "Perfect spot by the river for kayaking.", location: "Oregon" },
    { title: "Green Valley", price: "22", description: "Serene meadows surrounded by hills.", location: "Montana" },
    { title: "Lakeside Retreat", price: "30", description: "Fishing and boating paradise.", location: "Michigan" },
    { title: "Snowy Peaks", price: "50", description: "Cozy cabins with mountain views.", location: "Alaska" },
    { title: "Canyon Camp", price: "18", description: "Adventure near the red rock canyons.", location: "Utah" },
    { title: "Golden Fields", price: "27", description: "Endless fields under golden sunsets.", location: "Kansas" },
    { title: "Blue Lagoon", price: "45", description: "Crystal clear water and white sands.", location: "Hawaii" },
    { title: "Whispering Pines", price: "33", description: "Calm forest with birds chirping.", location: "North Carolina" },
    { title: "Hidden Falls", price: "37", description: "Waterfall views with lush greenery.", location: "Oregon" },
    { title: "Rocky Ridge", price: "29", description: "Hike through rugged terrain.", location: "Nevada" },
    { title: "Sunrise Point", price: "32", description: "Watch the sunrise over the hills.", location: "Vermont" },
    { title: "Wildflower Grove", price: "26", description: "Blooming flowers in spring.", location: "Texas" },
    { title: "Moonlit Meadows", price: "38", description: "Camp under the full moon sky.", location: "Idaho" },
    { title: "Echo Valley", price: "34", description: "Echoes through deep valleys.", location: "Wyoming" },
    { title: "Crystal Lake", price: "31", description: "Clear waters with plenty of fish.", location: "Minnesota" },
    { title: "Shady Hollow", price: "24", description: "Cool shaded spots for summer.", location: "Missouri" },
    { title: "Bear Creek", price: "36", description: "Wildlife sightings by the creek.", location: "Alabama" },
    { title: "Misty Woods", price: "42", description: "Foggy mornings with a forest scent.", location: "Maine" },
    { title: "Golden Ridge", price: "41", description: "Scenic ridge views during sunset.", location: "Tennessee" },
    { title: "Serenity Cove", price: "39", description: "Quiet cove with calm waters.", location: "Georgia" }
];

Campground.insertMany(dummyCampgrounds)
.then(() => {
    console.log("INSERTED CAMPGROUNDS!");
});