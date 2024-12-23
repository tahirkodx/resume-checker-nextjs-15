import React from 'react'

const Tabs = () => {
  return (
    <div className='w-full border-t border-b p-4 mb-2'>
        <div className='flex items-center pl-8'>
            <button className='bg-[#D9292F] text-white rounded-lg px-4 py-1.5'>About</button>
            <button className='flex px-4 py-1.5'>Jobs</button>

        </div>
    </div>
  )
}

export default Tabs