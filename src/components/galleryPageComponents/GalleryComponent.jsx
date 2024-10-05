import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "./galleryComponent.css"


function GalleryComponent() {
    return (
        <>
            <div className='bootstrap-carousel-container'>
                <Carousel data-bs-theme="dark" interval={4000}>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SUjbtVb-_8zi-hO-nITKEqRir3ha6wa3D6R3C5Izi3lte1rq2ch1ZB1t86DPuHvNZp8&usqp=CAU" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SUjbtVb-_8zi-hO-nITKEqRir3ha6wa3D6R3C5Izi3lte1rq2ch1ZB1t86DPuHvNZp8&usqp=CAU" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SUjbtVb-_8zi-hO-nITKEqRir3ha6wa3D6R3C5Izi3lte1rq2ch1ZB1t86DPuHvNZp8&usqp=CAU" alt="Third slide" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default GalleryComponent