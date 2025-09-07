import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userdata,setUserdata] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskData, setTaskData] = useState('')
const [asignTo, setAsignTo] = useState('')
const [category, setCategory] = useState('')

const [newTask, setNewTask] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()
    
    setNewTask({ taskTitle,taskData ,taskDescription,category,active: false, newTask: true, failed: false, completed: false})

  const data = userdata

  
    
   data.forEach(function (elem) {
       if(asignTo == elem.firstName){
       elem.task.push(newTask)
       elem.taskcount.newTask = elem.taskcount.newTask +1
      }
    })
     setUserdata(data)
     console.log(data);
     



    setAsignTo('')
    setCategory('')
    setTaskData('')
    setTaskTitle('')
    setTaskDescription('')
    
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form  onSubmit={(e)=>{
              submitHandler(e) }}className='flex flex-wrap w-full mt-7 items-start justify-between'>

                <div className='w-1/2'>
                <div>
                 <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                <input value={taskTitle}
                  onChange={(e)=>{
                    setTaskTitle(e.target.value)
                  }}
                className='text-sm py-1 px-2 w-4/5 rounded otline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
               </div>
                <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input value={taskData}
                  onChange={(e)=>{
                    setTaskData(e.target.value)
                  }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
               </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input value={asignTo}
                  onChange={(e)=>{
                    setAsignTo(e.target.value)
                  }} 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input value={category}
                  onChange={(e)=>{
                    setCategory(e.target.value)
                  }} 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design ,Dev,etc' />
                </div>
                </div>
                <div className='w-1/2 flex flex-col item-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={taskDescription}
                  onChange={(e)=>{
                    setTaskDescription(e.target.value)
                  }}
                 className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                <button className='bg-emerald-500 hover:bg-emerald-600 py-3 rounded text-sm mt-4 w-full'>Create task</button>
              </div>
               
            </form>
        </div>
  )
}

export default CreateTask