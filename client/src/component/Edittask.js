import React,{useEffect, useState} from 'react'
import './Addtask.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Edittask() {
  const [id,setId] = useState()
  const [tasknam,setTaskname] = useState()
  const [endtim,setEndtime] = useState()
  
  // get Task specific id
  const params = useParams('')

  // get Task Data
  const fetchTask=async ()=>{
    const result =  await axios.get('http://localhost:8000/getTask/'+params.id)
    setId(result.data.task.id)
  }
  // Update function
  const handleUpdate=async (e)=>{
    e.preventDefault()

   

    if(tasknam === "" || endtim ===""){    // vadilate input field
      alert("Enter details")
    }else{  
      const body = {
        id,
        taskname:tasknam,
        endtime:endtim
      }
      const result = await axios.post('http://localhost:8000/edittask',body)
      alert(result.data.message)
    }
  }

  useEffect(()=>{
    fetchTask()
  })

  return (
    <div className='form_div'>
      <div className='form_nav'>
        <h2>Edit Task</h2>
      </div>
      <div className='add_form'>
        <input type='text'  onChange={(e)=>setTaskname(e.target.value)}   placeholder='Edit Task name'></input>
        <input type='text'  onChange={(e)=>setEndtime(e.target.value)}   placeholder='Edit Completion time'></input>
        <div className='button_gp'>
          <button onClick={(e)=>handleUpdate(e)}>Update</button>
          <Link to={'/'}><button>CANCEL</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Edittask