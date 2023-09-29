const express = require('express')

// create server
const app = express()


const cors = require('cors')
const logic = require('./DataBase/backend')
// connect to frontend and backend
app.use(cors({orgin:'http://localhost:3000'}))

app.use(express.json())


// get all task 
app.get('/getTask',(req,res)=>{
    logic.allTask().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// Add nerw task
app.post('/addTask',(req,res)=>{
    logic.addTask(req.body.id,req.body.taskname,req.body.endtime).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// get single Task
app.get('/getTask/:id',(req,res)=>{
    logic.gettask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// Edit task
app.post('/edittasak',(req,res)=>{
    logic.editTask(req.body.id,req.body.taskname,req.body.endtime).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// delete task
app.delete('/deletetask/:id',(req,res)=>{
    logic.removeTask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(8000,()=>{console.log("server started at 8000")}) 