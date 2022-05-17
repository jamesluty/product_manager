const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// This is where we import the products routes function from our product.routes.js file
const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));
