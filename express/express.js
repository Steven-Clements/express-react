/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
const express = require('express');
const env = require('dotenv');
const connectDB = require('./mongoDB/mongoose');

/* ~ ~ ~ ~ ~ <2> Initialize Server Assets </2> ~ ~ ~ ~ ~ */
const app = express();
env.config();
connectDB();

/* ~ ~ ~ ~ ~ <3> Accept JSON Encoded Data </3> ~ ~ ~ ~ ~ */
app.use(express.json({ extended: false }));

/* ~ ~ ~ ~ ~ <4> Define API Routes </4> ~ ~ ~ ~ ~ */
app.use('/api/users', require('./routes/UserRoutes'));

/* ~ ~ ~ ~ ~ <5> Define a Port for Requests </5> ~ ~ ~ ~ ~ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(
  `Express server started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}...`
));