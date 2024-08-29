const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // This option adds createdAt and updatedAt fields
});

const TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);

module.exports = TodoModel;
