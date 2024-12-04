import React, { useEffect, useState } from 'react'
import './Imageslider.css'
import { slideImageData } from '../../data/slidingImg';


const ImageSlider = () => {

    const [currentImage , setCurrentImage] = useState(0);

    const images = slideImageData;

    useEffect(() => {
        const timer =setTimeout(() => {
            setCurrentImage((prevIndex) => (prevIndex+1) % images.length)
        }, 3000);
        return () => clearTimeout(timer);
    });

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    }
  return (
    <div>
        <div className="slider-box">
            <div onClick={prevSlide} className='slide-right'>
                <span>
                    {' < '}
                </span>
            </div>
            <div className='slide-img'>
            <img
                src={images[currentImage]}
                alt={`Slide ${currentImage +1}`}
                
            />
            </div>

            <div onClick={nextSlide} className='slide-left'>
                <span>
                    {' > '}
                </span>
            </div>
            
        </div>
        <div className='dots-section'>
            {images.map((_, index) => (
                <span
                    key={index}
                    className='slide-dots'
                    onClick={() => setCurrentImage(index)}
                    style={{backgroundColor: index === currentImage ? 'rgb(1, 57, 1': 'rgb(235, 235, 191)'}}
                ></span>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider