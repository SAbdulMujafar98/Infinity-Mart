import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Computer = () => {

    const fisrtFiveImages = computerData.slice(0,6)

  return (
    <>
        
        <div className='proSection' >
            <div className="proTitle">
            <h2>Computers</h2>
            </div>
            <div className="img-card">
            {
                fisrtFiveImages.map((item) => {
                    return(
                        <div className='imgBox'>
                            <Link to={`/Computers/${item.id}`}>
                            <img className='proImage' src={item.image} alt={item.title} />
                            <p>{item.company}</p>
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

export default Computer