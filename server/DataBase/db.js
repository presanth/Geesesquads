const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Geesesquads')

const task = mongoose.model('task',{
    id:String,
    taskname:String,
    endtime:String
})

module.exports={
    task
}