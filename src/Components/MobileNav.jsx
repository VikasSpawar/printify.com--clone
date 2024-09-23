import React, { useState } from 'react'

const MobileNav = () => {
const [open , setOpen]=useState(false)


  return (
    <div >
        <button className='  space-y-1' onClick={()=>setOpen(true)}>
           <div className='w-4 h-[1px] bg-green-400'>
           </div>
           <div className='w-4 h-[1px] bg-green-400'>
           </div>
           <div className='w-4 h-[1px] bg-green-400'>
           </div>
        </button>

            <div className={`z-10   ${open ? "bg-transparent/40 w-full":'w-0'} z-9 top-0 absolute left-0 `}>
 <div className={` relative transition-all  duration-300 ${open ? 'translate-x-0':'-translate-x-56'} w-56 h-screen   bg-white`}>
        <div className='flex'>
        <h2 className='text-xl w-full m-2'>Menu</h2>
      <button className='px-4 mx-2 border rounded-md w-14 h-14 text-2xl text-gray-500 ' onClick={()=>setOpen(false)}>x</button>
        </div>
       <div className=''>
        <ul className='text-gray-600 text-xl space-y-4 p-2 text-left'>
            <li><a href='#'>Catalog</a></li>
            <li><a href='#'>how it works</a></li>
            <li><a href='#'>pricing</a></li>
            <li><a href='#'>blog</a></li>
        </ul>



       </div>
    </div>
            </div>
        
    </div>
   
  )
}

export default MobileNav
