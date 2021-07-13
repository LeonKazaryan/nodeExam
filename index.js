import express from 'express';
import todoRouter from './routes/todo.routes.js'

const app = express();
const PORT = 5000;

app.use(express.json({ extended: true }));
app.use('/todo', todoRouter);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})


