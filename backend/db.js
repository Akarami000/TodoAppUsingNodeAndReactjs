const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akkipariyar:Akshay1998@user1.xb7n9hj.mongodb.net/newUser?retryWrites=true&w=majority&appName=user1');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {todo}