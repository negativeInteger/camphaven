const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));

// Routes
app.get("/campgrounds",async () => {
    resizeBy.send("works");
});

// Server
app.listen(3000, () => {
    console.log("SERVER IS RUNNING AT PORT 3000");
});