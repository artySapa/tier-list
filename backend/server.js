// ================ INITIAL TOOLS SETUP ====================

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

connection =
  "mongodb+srv://artemsapa:sapa@tiers.kpcrstz.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the DB"))
  .catch(console.error);

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => console.log("Server listening on port 8080"));


// ================ Tier Entries setup ====================
const TierEntries = require("./models/TierEntries");

app.get('/entries', async (req, res) => {
    const entries = await TierEntries.find({});
})

