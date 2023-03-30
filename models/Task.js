const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    points: {
        type: String,
        required: true,
    },
    reminder: {
        type: Boolean,
        default: false,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },

});


module.exports = mongoose.model('Tasks', TaskSchema);