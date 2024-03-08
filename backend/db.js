const mongoose = require('mongoose');
const { boolean } = require('zod');
mongoose.connect("mongodb+srv://shridmishra:shrid@cluster0.aok2mdr.mongodb.net/todos")

const todoSchema = new mongoose.Schema({
    todo: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo: todo
}