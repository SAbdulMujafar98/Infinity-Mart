import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'

const Tv = () => {
    const fisrtFiveImages = tvData.slice(0,6)

    return (
      <>
      <div className='proSection' >
        <div className="proTitle">
            <h2>Tv's</h2>
        </div>
          <div className="img-card">
              {
                  fisrtFiveImages.map((item) => {
                      return(
                          <div className='imgBox'>
                            <Link to={`/TV/${item.id}`}>
                              <img className='proImage' src={item.image} alt={item.model} />
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

export default Tv