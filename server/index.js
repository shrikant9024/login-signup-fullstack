const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user");
const cors = require("cors");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/authapp");
app.use(cors());

app.use(express.json());

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
