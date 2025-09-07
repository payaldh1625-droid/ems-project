import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

const [userdata,setUserdata] = useContext(AuthContext)


  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 rounded mt-5  '>
      <div className='bg-red-400 mb-2  px-4 py-2 flex justify-between rounded '>
        <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
     </div>
   <div id='alltask2' className='overflow-auto'>
         {userdata.map((elem, idx)=>{
         
         return <div key={idx} className='border-2 border-emerald-500  mb-2  px-4 py-2 flex justify-between rounded '>
        <h2 className='w-1/5 text-lg font-medium  '>{elem.firstName}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-orange-400'>{elem.taskCount.active}</h5>
        <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskCount.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
     </div>
      })} 
   </div>
   
    </div>
  )
}

export default AllTask