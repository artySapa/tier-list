const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema ({
    content: {
        type: String,
        required: true,
    },
    rank: {
        type: Number,
    },
    timestamp: {
        type: Number,
    },
})

const TierEntries = mongoose.model("TierEntry", EntrySchema);

module.exports = TierEntries;