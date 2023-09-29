import React,{useState,useEffect} from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Admin() {

    const [task,setTask]=useState()
    const fetchTask  = async ()=>{
        const result =await axios.get('http://localhost:8000/getTask')
        setTask(result.data.task)
        console.log(result.data.task)
    }
    const handleDelete= async (id)=>{
        const result = await axios.delete('http://localhost:8000/deleteEmp/'+id)
        alert(result.data.message)
        // refresh table content
        fetchTask()
    }
    useEffect(()=>{
        fetchTask()
    },[])

  return (
    <div className='Admin-main'>
        {/* Top Navbar */}
        <div className='Admin-Nav'>
            <h1 className='Admin-head'>Task management</h1>
            <Link to={'/AddTask'} className='task-btn'>
                <i class="fa-solid fa-plus"></i>Add Task</Link>
        </div>
        {/* Displaying List */}
        <div className='Admin-display'>
            <table>
                <tr>
                    <th>#</th>
                    <th>Task Name</th>
                    <th>Completion Time</th>
                    <th>Action</th>
                </tr>
                {
                    task?.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.taskname}</td>
                        <td>{item.endtime}</td>
                        <td>
                            {/* task edit button */}
                            <Link className='edit_btn' to={`/EditTask/${item.id}`} >Edit Task</Link>
                            {/* task delete button */}
                            <button onClick={()=>handleDelete(item.id)} className='delete_btn'>Delete Task</button>
                        </td>
                    </tr>
                    ))
                }
                
            </table>
        </div>
    </div>
  )
}

export default Admin