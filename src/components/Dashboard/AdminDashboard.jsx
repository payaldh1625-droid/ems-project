import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='bg-black h-screen w-screen text-white p-7'>
        <Header changeUser={props.changeUser}  />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard