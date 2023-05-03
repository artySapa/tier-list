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

// sends the request for the server to output all the known tier entries that
// the user has created
app.get('/entries', async (req, res) => {
    const allEntries = await TierEntries.find({});
})

app.post('/entries/new', async (req,res) => {
    const entries = new TierEntries({
        content: req.body.content,
        rank: req.body.content,
        timestamp: Date.now(),
    });
    await entries.save();
    res.json(entries);
})