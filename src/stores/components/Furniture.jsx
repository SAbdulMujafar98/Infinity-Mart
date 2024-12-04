import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {
    const fisrtFiveImages = furnitureData.slice(0,6)

    return (
      <>
        
        <div className='proSection' >
          <div className="proTitle">
              <h2>Furnitures</h2>
          </div>
          <div className="img-card">
            {
              fisrtFiveImages.map((item) => {
                   return(
                      <div className='imgBox'>
                        <Link to={`/Furnitures/${item.id}`}>
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

export default Furniture