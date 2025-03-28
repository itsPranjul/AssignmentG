const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const queryRoutes = require("./routes/queryRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", queryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
