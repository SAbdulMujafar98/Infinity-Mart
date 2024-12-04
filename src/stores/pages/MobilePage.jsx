import React, {useState} from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MobilePage = () => {

    const [selectedProduct , setSelectedProduct] = useState([]);

const companyHandler = (com) =>{
    if(selectedProduct.includes(com)){
        setSelectedProduct(selectedProduct.filter(item => item!==com))
    } else{
        setSelectedProduct([...selectedProduct, com])
    }
}

const filteredProduct = selectedProduct.length===0?
        mobileData : mobileData.filter((pc)=>selectedProduct.includes(pc.company))

  return (
    <>
    <Navbar />

    <div className="product-page">

    <div className="pro-selected">
        {mobileData.map((phone) => {
            return(
                <div className='company-column'>
                    <label>
                        <input type='checkbox'
                        checked = {selectedProduct.includes(phone.company)}
                        onChange={()=> companyHandler(phone.company) }
                        />
                        {phone.company}
                    </label>
                </div>
            )
        })}
    </div>
    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
            <Link to={`/Mobiles/${item.id}`}>
                <div className='pageCard' >
                    
                    <div className="pageImg">
                        <img src={item.image} alt={item.model} />
                    </div>
                    
                    
                    <div className="proModel">
                       <h3> {item.company}</h3>
                        <p>{item.model}</p>
                    </div>
                    <div className="price">
                        <p>Rs.{item.price}</p>
                    </div>
                </div>
            </Link>
            )
        })}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default MobilePage