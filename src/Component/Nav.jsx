import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='bg-[#5F5D9C]'>
        <div className="container">
            <div className='py-2'>
                <ul className='flex justify-center items-center gap-x-5'>
                    <li><a href="#" className='text-white text-lg'>Home</a></li>
                    <li><a href="#" className='text-white text-lg' >Header</a></li>
                    <li><a href="#" className='text-white text-lg'>Contact</a></li>
                    <li><a href="#" className='text-white text-lg'>About</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav