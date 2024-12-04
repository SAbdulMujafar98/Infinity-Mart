import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobile = () => {

    const fisrtFiveImages = mobileData.slice(0,6)

  return (
    <>
    <div className='proSection' >
    <div className="proTitle">
        <h2>Mobiles</h2>
    </div>
        <div className="img-card">
            {
                fisrtFiveImages.map((item) => {
                    return(
                        
                        <div className='imgBox'>
                            <Link to={`/Mobiles/${item.id}`}>
                                <img className='proImage' src={item.image} alt={item.model} />
                                <p>{item.company}</p>
                                <p></p>
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

export default Mobile