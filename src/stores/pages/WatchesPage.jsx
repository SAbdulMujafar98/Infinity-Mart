import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { watchData } from '../data/watch'

const WatchPage = () => {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {watchData.map((item) => {
            return(
            <Link to={`/Watches/${item.id}`}>
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
    <Footer />
    </>
  )
}

export default WatchPage