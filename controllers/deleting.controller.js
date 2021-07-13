import { todoList } from "./creating.controller.js";

export const del = (req, res) => {
    if (todoList.length === 0) {
        return res.status(400).json({ message: "ToDo list is empty" });
    }
    let { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "To delete a note you should write its title" });
    }

    let todoItem = todoList.find(item => item.title === title);
    if (!todoItem){
        return res.status(404).json({ message: `A note with title ${title} was not found` });
    }   

    const updatedTodoList = todoList.splice(todoList.indexOf(todoItem), todoList.indexOf(todoItem));

    todoList = updatedTodoList
  
    return res.json({ message: `Note with the title ${todoItem.title} was succesfully deleted` });
}