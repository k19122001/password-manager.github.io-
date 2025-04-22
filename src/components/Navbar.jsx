import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-green-400 rounded-bl-3xl rounded-br-3xl'>
            <div className='mycontainer flex justify-between items-center p-0 mx-auto'>
                <div className='logo'>
                    <h1 className='text-2xl font-bold'> 
                        <span className='text-fuchsia-500'>&lt;  My</span> Watch<span className='text-fuchsia-500'>list /&gt;</span></h1>
                </div>
                {/* <ul className='flex gap-8 list-none'>
                    <a className='hover:bg-fuchsia-500 hover:border-2 hover:border-black rounded-2xl hover:font-bold p-3' href='/'>Home</a>
                    <a className='hover:bg-fuchsia-500 hover:border-2 hover:border-black rounded-2xl hover:font-bold p-3' href='/'>About</a>
                    <a className='hover:bg-fuchsia-500 hover:border-2 hover:border-black rounded-2xl hover:font-bold p-3' href='/'>Contect</a>
                    <a className='hover:bg-fuchsia-500 hover:border-2 hover:border-black rounded-2xl hover:font-bold p-3' href='/'>Account</a>
                    <a className='hover:bg-fuchsia-500 hover:border-2 hover:border-black rounded-2xl hover:font-bold p-3' href='/'>Settings</a>
                </ul> */}
                <div>
                    <button className='text-white cursor-pointer border-2 border-fuchsia-700 hover:border-2 hover:border-fuchsia-500 bg-emerald-700 hover:bg-emerald-950 my-5 mx-2 flex justify-center rounded-full'>
                    <img className='invert w-10' src='/icon/github.png' alt='github logo'/>
                    <span className='font-bold px-2 m-2'>Github</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
