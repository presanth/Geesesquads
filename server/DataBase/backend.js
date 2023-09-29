const db = require('./db')


// find tasks
const allTask = ()=>{
    return db.task.find().then(result=>{
         if(result){
             return{
                 statusCode:200,
                 task:result
             }
         }else{
             return{
                 statusCode:404,
                 message:"no tasks available"
             }
         }
     })
 }

//  Add new task
const addTask = (id,taskname,endtime)=>{
    return db.task.find({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"task id already exist"
            }
        }else{
            // create new task object
            const newTask = new db.task({
                id,
                taskname,
                endtime
            })
            // save new objct in db
            newTask.save()
            return{
                statusCode:200,
                message:"New Task added successfully"
            }
         }
     })
 }

//  get single task
const gettask = (id)=>{
    return db.task.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                task:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"task not present"
            }
        }
    })
}


//  edit task
const editTask = (id,taskname,endtime)=> {
    return db.task.findOne({id}).then(result => {
        if (result) {
            result.id = id
            result.taskname = taskname
            result.endtime = endtime

            result.save()
            return {
                statusCode: 200,
                message: 'task updated'
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'dont exist task'
            }
        }
    })
}
// delete task

const removeTask=(id)=>{
    return db.Employee.deleteOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"task removed"
            }
        }else{
            return{
                statusCode:404,
                message:"task not present"
            }
        }
    })
}

 module.exports={
    allTask,addTask,editTask,removeTask,gettask
 }