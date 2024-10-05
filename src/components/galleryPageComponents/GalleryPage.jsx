import React from 'react'
import "./galleryPage.css"
import GalleryComponent from './GalleryComponent'
import Galaxy from "../../assets/galaxyImg.png"

function galleryPage() {
    return (
        <>
            <div className='gallery-page-container'>
                <div className='gallery-page-child-container'>
                    <div className="gallery-container">
                        <h3>пару успехов учеников, которые учились у нас</h3>
                        <GalleryComponent />
                    </div>
                    <div className="first-sentence">
                        <h3>Наша уникальная методика творит чудеса! Мы не просто учим, мы меняем жизни! </h3>

                        <img src={Galaxy}
                            className='galaxy-image'
                            alt="The imag was not found" />
                    </div>
                    <div className='galley-content'>
                        Представьте: вы свободно общаетесь с коллегами, заводите новых друзей, блестяще проходите собеседования и даже открываете свой бизнес - и все это на иврите!
                    </div>
                    <div className="second-sentence">
                        С нами это не мечта, а реальность!
                    </div>
                </div>
            </div>
        </>
    )
}

export default galleryPage