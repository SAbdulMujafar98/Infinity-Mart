import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const fisrtFiveImages = kitchenData.slice(0,6)

    return (
      <>
        
        <div className='proSection' >
            <div className="proTitle">
                <h2>Kitchen</h2>
            </div>
            <div className="img-card">
            {
              fisrtFiveImages.map((item) => {
                   return(
                      <div className='imgBox'>
                        <Link to={`/Kitchen/${item.id}`}>
                          <img className='proImage' src={item.image} alt={item.title} />
                          <p>{item.brand}</p>
                        </Link>  
                      </div>
                  )
              })
             }
             </div>
        </div>
      </>
  )
}

export default Kitchen