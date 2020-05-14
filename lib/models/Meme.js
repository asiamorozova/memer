const mongoose require ('mongoose');

cosnt schema = new mongoose.Schema({
    top: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        requred: true
    },
    bottom: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Meme', schema);
