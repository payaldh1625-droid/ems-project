import React from 'react'
import Header from '../others/Header'
import TasklistNumber from '../others/TasklistNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='h-screen w-screen bg-black'>
    <div className=' text-white p-10 h-screen bg-[#1c1c1c]'>
     <Header changeUser={props.changeUser} data={props.data}/>
     <TasklistNumber data={props.data}/>
     <TaskList data={props.data}/>

    </div>
    </div>
  )
}

export default EmployeeDashboard