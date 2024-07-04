// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const app = express();
// require("dotenv").config();


// const PORT = process.env.PORT || 8070;

// app.use(cors());
// app.use(bodyParser.json());

// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// })

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("MongoDB connection successfully");
// })

// const GuestRouter = require("./routes/Guest.js");

// app.use("/Guest",GuestRouter);

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`)
// })

import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 8070;

const uri = "your_mongodb_connection_string";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


