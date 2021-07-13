export let todoList = [];
 
export const create = (req, res) => {
    const todoItem = req.body;
    const{title = null, description = null} = req.body
    const date = new Date();

    if (!title) {
        return res.status(400).json({ message: "There is no title" });
    }

    if (!description){
        return res.status(400).json({ message: "There is no description" });
    }

    if (todoList.find(item => item.title === todoItem.title)) {
        return res.status(400).json({message: "Note with this title is already existing"})
    }
    
    todoItem.creatingDate = date.toLocaleDateString();
    todoItem.isFinished = false;
    todoList.push(todoItem);
    return res.json({ message: `Note ${todoItem.title} was successfully added` });
}