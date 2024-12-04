import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {
    const fisrtFiveImages = watchData.slice(0,6)

    return (
      <>
      <div className='proSection' >
      <div className="proTitle">
            <h2>Watches</h2>
        </div>
          <div className="img-card">
              {
                  fisrtFiveImages.map((item) => {
                      return(
                          <div className='imgBox'>
                            <Link to={`/Watches/${item.id}`}>
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

export default Watch