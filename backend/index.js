
const express = require('express');
const {createTodo}  = require('./types');
const {updateTodo}  = require('./types');
const {todo}= require('./db')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log("test",parsedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"you sent the wrong input"
        })
        return;
    }
    
      // if everthing is correct put int mongoDb
  await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        message:"todo is created"
    })
})
app.get('/todos',async (req,res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })


})
app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    console.log("test",parsedPayload);
    if(!parsedPayload){
        res.status(411).json({
            message:"You sent the wring input"
        })
        return  
    }    

    await todo.updateOne({_id:req.body.id},{
        completed:true
    })
    res.json({
        message:"todo is completed"
    })

})



app.listen(3000,()=>{
    console.log("port is running non 3000")
});