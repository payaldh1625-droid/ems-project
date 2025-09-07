import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
      <div className='h-full flex-shrink-0 w-[350px] bg-red-400 rounded-xl p-5'>
         <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4>{data.date}</h4>
         </div>
         <h2 className='mt-6 text-2xl font-semibold p'>{data.title}</h2>
         <p className='text-sm mt-3'>{data.description}</p>
         <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
         </div>
    </div>
  )
}

export default AcceptTask