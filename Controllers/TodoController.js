const ToDoModel = require("../Models/TodoModel");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
   console.log(id)
    ToDoModel
        .findByIdAndDelete(id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}