import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "./galleryComponent.css"
import Client1 from "../../assets/client1.jpg"
import Client2 from "../../assets/client2.jpg"
import Client3 from "../../assets/client3.jpg"
import Client4 from "../../assets/client4.jpg"
import Client5 from "../../assets/client5.jpg"
import Client6 from "../../assets/client6.jpg"
import Client7 from "../../assets/client7.jpg"
import Client8 from "../../assets/client8.jpg"


function GalleryComponent() {

    return (
        <>
            <div className='bootstrap-carousel-container'>
                <Carousel data-bs-theme="dark" interval={4000}>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client2} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client3} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client4} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client5} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client6} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client7} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Client8} alt="First slide" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default GalleryComponent