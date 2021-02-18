const mongoose = require('mongoose');

const GuildPrefix = new mongoose.Schema({
    GuildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    GuildName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },

    OwnerID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    OwnerName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    Prefix: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },


});

module.exports = mongoose.model("Guild Prefix",GuildPrefix);