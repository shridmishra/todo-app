const express  = require('express');
const app = express();
const { createTodo } = require('./types')
const { updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.post('/todo',async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            msg: "wrong input"
        })
        return;}

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.json({
            msg: "todo created"
        })

})

app.get("/todos",async function(req,res){
  const todos =  await todo.find({})

  res.json({
    todos
  })
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const safePayload = updateTodo.safeParse(updatePayload);

    if(!safePayload.success){
        res.status(411).json({
            msg: "wrong input"
        })
        return;
    }
     
    await todo.update({
        _id: req.body.id 
    },  
    {
     completed: true
    })
    res.json({
            msg: "todo"
        })
      
    })

    app.listen(3000)