const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const auth = require("./middleware/auth");
const imgRoute = require('./routes/image');


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use('/api/images', imgRoute);


// Define Routes



// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(`${__dirname}/client/build/index.html`));
// });

app.get("/", (req, res) => res.json({ msg: "Welcome" }));



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));