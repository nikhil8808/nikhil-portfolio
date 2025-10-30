import React from 'react'
import { Link } from 'react-router-dom'
import './css/footer.css'

const Footer = () => {
    return (
        <div className='w-full border-t border-gray-300 h-[20vh] gap-[1.3rem] py-[2.7rem] flex items-center justify-center flex-col'>
            <div className='flex gap-[1rem] text-sm -semibold'>
                <Link to="/" className='footer-link'>
                    Home
                </Link>
                <Link to="/about" className='footer-link'>
                    About
                </Link>
                <Link to="/projects" className='footer-link'>
                    Projects
                </Link>
                <Link to="/education" className='footer-link'>
                    Education
                </Link>

            </div>
            <div>
               <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2025 Spencer Sharp. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer