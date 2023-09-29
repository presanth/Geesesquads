import React,{useState,useEffect} from 'react'
import './Addtask.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import uuid from 'react-uuid'

function Addtask() {
  const [id,setId] = useState('')
  const [taskname,setTaskname] = useState('')
  const [endtime,setEndtime] = useState('')

  const [err,setErr] = useState('')

  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])

  // add new task
  const adTask = async (e)=>{
    e.preventDefault()
    if(taskname === "" || endtime ===""){ //Validate input field
      setErr('Enter Details')
    }else{
    setId(uuid().slice(0,3));
    console.log(id);
    const body={
      id,
      taskname,
      endtime
    }
    const result = await axios.post('http://localhost:8000/addTask',body)
    alert(result.data.message);
    }
  }


  return (
    <div className='form_div'>
      <div className='form_nav'> 
        <h2>Add Task</h2>
      </div>
      <div className='add_form'>
        
        <input type='text' onChange={(e)=>setTaskname(e.target.value)}  placeholder='Task name' />
        <input type='text' onChange={(e)=>setEndtime(e.target.value)} placeholder='Completion time'/>
        <p className='error-text'>{err}</p>
        <div className='button_gp'>
          <button onClick={(e)=>adTask(e)}>ADD</button>
          <Link to={'/'}><button>CANCEL</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Addtask