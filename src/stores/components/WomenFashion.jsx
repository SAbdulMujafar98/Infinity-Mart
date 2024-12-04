import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const WomenFashion = () => {
    const fisrtFiveImages = womanData.slice(0,6)

    return (
      <>
      <div className='proSection' >
        <div className="proTitle">
            <h2>Women Fashion</h2>
        </div>
        <div className="img-card">
            {
              fisrtFiveImages.map((item) => {
                   return(
                      <div className='imgBox'>
                        <Link to={`/Women Fashion/${item.id}`}>
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

export default WomenFashion