import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Carousal = () => {
    return (
        <div className="carousel w-full my-12 bg-gradient-to-r from-indigo-700">
            <div id="slide1" className="carousel-item relative w-full bg-gradient-to-t from-indigo-700">
                <img src={img1} alt='banner' className="w-full from-indigo-700 bg-gradient-to-r" />
                <div className="absolute flex transform -translate-y-1/2  bottom-0 right-5">
                    <a href="#slide4" className="btn btn-/circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='banner' className="w-full" />
                <div className="absolute flex transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='banner' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} alt='banner' className="w-full" />
                <div className="absolute flex transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousal;