import { useState } from 'react'; import React from 'react';

import './App.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

function App() {
  //array to hold states and values
  const [tasks, setTasks]= useState([])

  //text container
  const [text, setText]= useState("")

  //Functions for various operations inside the app
  const Add=(e)=> {
    e.preventDefault();
    setTasks([...tasks, text])
    setText("")
  }
  const Update=(i)=> {
    const modifyTask= prompt("Enter new task", tasks[i])
    if(modifyTask){
      tasks[i]= modifyTask
      setTasks([...tasks]) 
    }
    else{
      alert("Update cancelled")
    }
  }
  const Delete=(i)=> {
    tasks.splice(i, 1)
    setTasks([...tasks])
  }
  const BurnList=()=> {
    if(BurnList){
      alert("Are you sure you want to clear the current list?")
      setTasks([])
    }
    else{
      alert("Deletion of list was cancelled")
    }
  }

  return (
    <div>
      <h1 className='task_Header'>&#x2713;TASK LISTER</h1>

      <form>
        <Paper elevation={5} className='Add_Task'>
          <TextField className='Text_field' variant="filled" label="Enter task" value={text} onChange={(e) => setText(e.target.value)}></TextField> <br/>
          <Button type="submit" variant='contained' disabled={!text} color='primary' onClick={Add}> <AddOutlinedIcon/>  Add New</Button>
          <Button type="submit" variant='contained' color='secondary' onClick={BurnList}> <DeleteSweepOutlinedIcon/>Clear List </Button>
        </Paper>
      </form>

      {tasks.map((data, i)=>{
      return <Paper elevation={4} className='task_rendering'>
        
        <p>{i+1}. &nbsp;{data}</p>
        <div>
        <Button variant='contained' color='primary' onClick={()=> Update(i)}> Update <UpdateOutlinedIcon/> </Button>
        <Button variant='contained' color='primary' onClick={()=> Delete(i)}> Delete<ClearOutlinedIcon/> </Button>
        </div>

        </Paper>
      })
      }
    </div>
  );
}

export default App;
