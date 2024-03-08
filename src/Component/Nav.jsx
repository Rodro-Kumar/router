import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='bg-[#5F5D9C] mb-2'>
        <div className="container">
            <div className='py-2'>
                <ul className='flex justify-center items-center gap-x-5'>
                    <li><a href="#" className='text-white text-lg'>Home</a></li>
                    <li><a href="#" className='text-white text-lg' >Project</a></li>
                    <li><a href="#" className='text-white text-lg'>About</a></li>
                    <li><a href="#" className='text-white text-lg'>Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav