import React from 'react'
import { Link } from "react-router-dom"
import "./secondPage.css"
import Card1 from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"
import Card3 from "../../assets/card3.png"
import Card4 from "../../assets/card4.png"
import Card5 from "../../assets/card5.png"
import Card6 from "../../assets/card6.png"
import FinalPage from '../finalPageComponent/FinalPage'


function ContentPage() {
    return (
        <>
            <main className='second-page-container'>
                <section className='main-section'>
                    <div className="first-section">
                        <h3 className='marker-sentence-opening-second-page'>Представляем вам революционную платформу</h3>
                    </div>
                    <div className="second-section">
                        <img
                            className='list-card1'
                            src={Card1} alt="The image was not found" />
                        <img
                            className='list-card2'
                            src={Card2} alt="The image was not found" />
                        <img
                            className='list-card3'
                            src={Card3} alt="The image was not found" />
                        <img
                            className='list-card4'
                            src={Card4} alt="The image was not found" />
                        <img
                            className='list-card5'
                            src={Card5} alt="The image was not found" />
                        <img
                            className='list-card6'
                            src={Card6} alt="The image was not found" />
                    </div>
                    <hr />
                    <div className="buttons-container">
                        <button className="button-63">
                            <a href='#finalPage-list' >Что я получу на курсе?</a>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContentPage