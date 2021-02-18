const mongoose = require('mongoose');

const UserPlayList = new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    UserName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },

    PlaylistSongs:{
        type: mongoose.SchemaTypes.Array,
        required: true,
    }


});

module.exports = mongoose.model("Users playlist",UserPlayList);