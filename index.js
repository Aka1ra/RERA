import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');  // Load the main page with the map
});

// Route for Maharashtra page
app.get('/MH', (req, res) => {
    res.render('MH'); // renders the MH.ejs view
});

app.get('/Andheri', (req, res) => {
    res.render('Andheri'); // Render the Andheri EJS page
});

app.get('/Borivali', (req, res) => {
    res.render('Borivali'); // Render the Borivali EJS page
});

app.get('/Kurla', (req, res) => {
    res.render('Kurla'); // Render the Kurla EJS page
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});