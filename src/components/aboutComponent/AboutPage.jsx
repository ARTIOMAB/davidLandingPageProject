import React from 'react'
import "./aboutPage.css"
import Profile from "../../assets/tamarProfile.jpg"
import Background from "../../assets/headerBackground.png"
import Dust from "../../assets/dust.png"

function CourseDetails() {
    return (
        <>
            <div className='about-container'>

                <div className='background-container'>
                    <img src={Background}
                        className='background-image'
                        alt="The image was not found" />
                </div>

                <div className="heading-image-profile-container">
                    <h2>Приятно познакомиться Давид и Тамар Абрамов</h2>
                    <img src={Profile} alt="The image was not found" />
                </div>

                <br />
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />

                <div className="about-first-section">
                    <span className='marker-sentence'>Мы - опытные преподаватели </span>
                    иврита с многолетним стажем.
                    .За годы работы мы преподавали в различных форматах:
                    <span className='marker-sentence'>: в ирийот , группах и классах, обучали людей со всего мира, в том числе студентов из разных городов Израиля. проводили индивидуальные занятия очно и онлайн.</span>
                    тысячи довольных учеников - и все это теперь доступно вам одним кликом!
                </div>
                <br />
                <div className="about-second-section">
                    <img src={Dust}
                        alt="The image was not found"
                        className="background-dust" />
                    Наш опыт привел нас к главному фокусу - обучению современному разговорному ивриту, тому языку, который вы слышите на улицах Израиля каждый день.
                    <br />
                    Наша уникальность в том, что мы создал <span className='marker-sentences'>создали собственную методику обучения</span>
                    , включающую специально разработанные уроки, упражнения и учебные материалы,<span className="marker-sentences">которых вы не найдете больше нигде!</span>
                </div>
                <br />
                <div className="about-button-section">

                    <div className='about-button-section-header'>
                        <img src={Dust}
                            alt="The image was not found"
                            className="background-dust" />

                        <span className="marker-sentence">Представьте</span> : вы свободно общаетесь с коллегами, заводите новых друзей, подтверждаете свою квалификацию , блестяще проходите собеседования и даже открываете свой бизнес - и все это на иврите!
                        <h3>С нами это не мечта, а реальность!</h3>

                    </div>

                    <div className='about-button-box'>
                        <button className='button-63'>хочу присоединиться</button>
                        <button className='button-63'><a href={import.meta.env.VITE_FIRST_WHATSAPP_MESSAGE} target='_blank'>больше информации</a></button>
                    </div>
                </div>
            </div >
            <hr />
        </>

    )
}

export default CourseDetails