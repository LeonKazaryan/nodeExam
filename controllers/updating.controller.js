import { todoList } from "./creating.controller.js";

export const update = (req, res) => {

    if (todoList.length === 0) {
        return res.json({ mewssgae: "ToDo list is empty" });
    }
    
    const date = new Date();
    const { title = null, newTitle = null, newDescription = null, isFinished = false } = req.body;

    if (!title) {
        return res.status(400).json({ mewssage: "Write a title of a note, which you want to change" });
    }

    // if (!newTitle || !newDescription){
    //     res.status(400).json({ mewssage: "You cannot update a note without new title or new description" });
    // }

    const todoItem = todoList.find(item => item.title === title);

    if (!todoItem){
        return res.status(404).json({ message: `A note with title ${title} was not found` });
    } 

    if(newTitle){
        todoItem.title = newTitle;
    }

    if(newDescription){
        todoItem.description = newDescription;
    }

  
    todoItem.creatingDate = date.toLocaleDateString();

    if (isFinished){
        todoItem.isFinished = true
       return res.json({ message: `You finished Note ${title}` });
    }

    return res.json({ message: `Note ${title} was succesfully updated.` });
}