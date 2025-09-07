import React from 'react'

const CompleteTask = ({data}) => {
  return (
        <div className='h-full flex-shrink-0 w-[350px] bg-blue-400 rounded-xl p-5'>
         <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4>{data.date}</h4>
         </div>
         <h2 className='mt-6 text-2xl font-semibold p'>{data.title}</h2>
         <p className='text-sm mt-3'>{data.description}</p>
         <div className='mt-2'>
            <button className=' px-6 py-1 mt-6 text-sm bg-red-500'>Completed</button>

         </div>
    </div>
  )
}

export default CompleteTask