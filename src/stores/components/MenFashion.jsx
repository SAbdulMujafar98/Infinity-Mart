import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const MenFashion = () => {
    const fisrtFiveImages = menData.slice(0,6)

    return (
      <>
        <div className='proSection' >
            <div className="proTitle">
                <h2>Men Fashion</h2>
            </div>
            <div className="img-card">
            {
              fisrtFiveImages.map((item) => {
                   return(
                      <div className='imgBox'>
                        <Link to={`/Men Fashion/${item.id}`}>
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

export default MenFashion