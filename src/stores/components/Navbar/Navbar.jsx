import React ,{useState} from 'react'
import './Navbar.css'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'
import { useCart } from '../../Cart/CartContext'

const Navbar = () => {

    const cartImg = '/assets/icons/cart.png'
    const wishListImg = '/assets/icons/wishlist.png'
    const loginImg='/assets/icons/login.png'
    const appIcon = '/assets/icons/infinity.png'

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    };

    const {cartItems} = useCart()
  return (
    <>
    <div className="navSection">
        <Link to="/">
        <div className="title">
            <img src={appIcon} alt='InfinityMall' />
            <h2>Infinity Mart</h2>
        </div>
        </Link>
        <div className="search">
            <input type='text' placeholder='Search...' />
        </div>
        <Link to="/">
        <div className="home">
            <p>HOME</p>
        </div>
        </Link>
        <div className="products">
            <p>PRODUCTS</p>
        </div>
        <div className="about">
            <p>ABOUT US</p>
        </div>
        <div className="menu-button">
            <button className="menu-btn" onClick={toggleMenu}>
            <span 
                className="material-symbols-outlined"
                style={{fontSize:"1.8rem"}}>

                {openMenu ? "close" : "menu"}

            </span>
            </button>
        </div>

        <div className="user">
            <div className="user-details">
                <img src={loginImg} alt="Login" />
            </div>
            <Link to='/Cart'>
            <div className="wishlist">
            <img src= {wishListImg} alt='wishlist' />
             <span 
                style={{padding: cartItems.length === 0 ? '0 0':'0.1rem 0.3rem'}}>
                {cartItems.length === 0 ? " " : cartItems.length}
            </span>
            </div>
            </Link>
            <Link to='/Cart'>
            <div className="cart">
            <img src= {cartImg} alt='cart' />
             <span 
                style={{padding: cartItems.length === 0 ? '0 0':'0.1rem 0.3rem'}}>
                {cartItems.length === 0 ? " " : cartItems.length}
            </span>
            </div>
            </Link>
        </div>
    </div>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <div className="subMenu">
    <ul>
        <Link to='/Mobiles'>
            <li>MOBILES</li>
        </Link>

        <Link to='/Computers'>
        <li>COMPUTERS</li>
        </Link>
        
        <Link to='/Watches'>
        <li>WATCHES</li>
        </Link>
        
        <Link to='/TV'>
        <li>TV</li>
        </Link>
        
        <Link to='/Speakers'>
        <li>SPEAKERS</li>
        </Link>
        
        <Link to='/AC'>
        <li>AC</li>
        </Link>
        
        <Link to='/Books'>
        <li>BOOKS</li>
        </Link>
        
        <Link to='/Fridges'>
        <li>FRIDGES</li>
        </Link>
        
        <Link to='/Furnitures'>
        <li>FURNITURES</li>
        </Link>
        
        <Link to='/Men Fashion'>
        <li>MEN FASHION</li>
        </Link>
        
        <Link to='/Women Fashion'>
        <li>WOMEN FASHION</li>
        </Link>
        
        <Link to='/Kitchen'>
        <li>KITCHEN</li>
        </Link>
        
    </ul>

    <button className="menu-btn" onClick={toggleMenu}>
        <span 
            className="material-symbols-outlined"
            style={{fontSize:"1.8rem"}}>

            {openMenu ? "close" : "menu"}

        </span>
    </button>
</div>
</>
  )
}

export default Navbar