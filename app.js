const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const Campground = require('./models/campground');

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));

// Routes
app.get("/campgrounds", async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('home', { campgrounds });
});

app.post("/campgrounds", async (req, res) => {
    const { campground } = req.body;
    await Campground.create(campground);
    res.redirect('/campgrounds');
});

app.get("/campgrounds/add", (req, res) => {
    res.render('campground/add');
});

app.get("/campgrounds/:id", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render('campground/details', { campground });
});

app.get("/campgrounds/:id/edit", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render('campground/edit', { campground } );
});

app.put("/campgrounds/:id/edit", async (req, res) => {
    const { campground } = req.body;
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, campground);
    res.redirect(`/campgrounds/${id}`);
});

app.delete("/campgrounds/:id/delete", async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
});

// Server
app.listen(3000, () => {
    console.log("SERVER IS RUNNING AT PORT 3000");
});