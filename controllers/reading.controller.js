import { todoList } from "./creating.controller.js";

export const read = (req, res) => {
    if (todoList.length === 0) {
        return res.status(400).json({ message: "ToDo list is empty" });
    }

    const{title = null, showAll = false} = req.body

    if (!title && showAll == false) {
        return res.status(404).json({ message: `To find a note you should write a title` });
    }

    if (showAll == "true") {
        return res.json({ todo_list: todoList });
    }

    const tmpList = todoList.find(item => item.title === title);
    if (!tmpList) {
        return res.status(400).json({ message: `Note with title ${title} was not found` });
    }
    return res.json({ todo_list: tmpList });
}