import React from 'react'
import "./galleryPage.css"
import GalleryComponent from './GalleryComponent'
import computerAnimation from "../../assets/computerAnimation.jpg"
import Dust from "../../assets/dust.png"

function galleryPage() {
    return (
        <>
            <div className='gallery-page-container'>
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />
                <div className='gallery-page-child-container'>
                    <div className="gallery-container">
                        <h3>пару успехов учеников, которые учились у нас</h3>
                        <GalleryComponent />
                    </div>
                    <img src={Dust}
                        alt="The image was not found"
                        className="background-dust" />
                    <div className="first-sentence">
                        <h3>
                            Мы вкладываем все наши силы, чтобы вы и ваши дети добились успеха.
                        </h3>

                        <img src={computerAnimation}
                            className='computer-image'
                            alt="The imag was not found" />
                    </div>
                    <div className='galley-content'>
                        Мы разработали персонализированные программы подготовки к экзамену багрут, которые дадут вашим детям прочное фундамент знаний, независимо от темпов обучения в школе.
                        <br />
                        <br />
                        Весь материал объясняется на самом простом и понятном уровне, с углубленной практикой, симуляциями, упражнениями на скорость чтения, изучением словарного запаса, обучением чтению длинных текстов, переводами текстов и многим другим.
                        <br />
                        <br />
                        С нашими программами ваш ребенок будет полностью готов к экзамену.
                    </div>
                    <img src={Dust}
                        alt="The image was not found"
                        className="background-dust" />
                </div>
            </div>
        </>
    )
}

export default galleryPage