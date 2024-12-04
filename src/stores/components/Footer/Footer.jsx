import React from 'react'
import './footer.css'


const Footer = () => {
    const facebook = "/assets/icons/facebook.png"
    const instagram = "/assets/icons/instagram.png"
    const youtube = "/assets/icons/youtube.png"
    const twitter = "/assets/icons/twitter.png"
    const original = "/assets/icons/original.png"
    const ret = "/assets/icons/return.png"
  return (
    
    <footer>
        <div className="top-footer">
            
            <div className="footer-text">
                <h3>ONLINE SHOPPING</h3>
                <ul>
                    <li>Electronics</li>
                    <li>Clothing</li>
                    <li>Home Needs</li>
                    <li>Kitchen wear</li>
                </ul>
            </div>
            <div className="footer-text">
                <h3>CUSTOMER POLICIES</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Terms and Conditions</li>
                    <li>Tracks Order</li>
                    <li>Cancellation</li>
                    <li>Return Policy</li>
                </ul>
            </div>
            <div className="social">
                <h3>FOLLOW US</h3>
                <div className="follow-icons">
                    <img src={facebook} alt=''/>
                    <img src={instagram} alt=''/>
                    <img src={youtube} alt=''/>
                    <img src={twitter} alt=''/>
                </div>
            </div>
            <div className="features">
                <div className="original">
                    <img src={original} alt=''/>
                    <p><strong>100% ORIGINAL guarantee</strong> for <br/>
                        all products at myntra.com</p>
                </div>
                <div className="return">
                    <img src={ret} alt=''/>
                    <p><strong>Return within 14days</strong> of <br/>
                        receiving your order</p>   
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <p>In case of any concern, Contact Us</p>
            <p>© 2024 www.tmart.com. All rights reserved.</p>
            <p>Sam's Company</p>
        </div>

    </footer>
  )
}

export default Footer