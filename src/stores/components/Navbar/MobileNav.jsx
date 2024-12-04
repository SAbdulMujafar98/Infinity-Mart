import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const MobileNav = ({ isOpen , toggleMenu }) => {
  return (
    <>
        <div
         className={`mobile-menu ${isOpen ? "active" : ""}`}
         onClick={toggleMenu}>

            <div className="mobile-menu-container">

                <ul>
                    <Link to='/Mobiles'>
                    <li className='menu-item'>Mobiles</li>
                    </Link>

                    <Link to='/Computers'>
                    <li className='menu-item'>Computers</li>
                    </Link>

                    <Link to='/Watches'>
                    <li className='menu-item'>Watches</li>
                    </Link>

                    <Link to='/TV'>
                    <li className='menu-item'>TV</li>
                    </Link>

                    <Link to='/Speakers'>
                    <li className='menu-item'>Speakers</li>
                    </Link>

                    <Link to='/AC'>
                    <li className='menu-item'>AC</li>
                    </Link>

                    <Link to='/Books'>
                    <li className='menu-item'>Books</li>
                    </Link>

                    <Link to='/Fridges'>
                    <li className='menu-item'>Fridge</li>
                    </Link>

                    <Link to='/Furnitures'>
                    <li className='menu-item'>Furniture</li>
                    </Link>

                    <Link to='/Men Fashion'>
                    <li className='menu-item'>Men Fashion</li>
                    </Link>

                    <Link to='/Women Fashion'>
                    <li className='menu-item'>Women Fashion</li>
                    </Link>

                    <Link to='/Kitchen'>
                    <li className='menu-item'>Kitchen</li>
                    </Link>
                </ul>
            </div>
            
         </div>
    </>
  )
}

export default MobileNav