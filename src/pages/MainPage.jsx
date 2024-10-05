import React from 'react'
import "./mainPage.css"
import MainComponent from '../components/mainComponent/MainComponent'
import SecondPage from '../components/secondPage/secondPage'
import GalleryPage from '../components/galleryPageComponents/GalleryPage'
import AboutPage from "../components/aboutComponent/AboutPage"
import PlatformOverview from '../components/platformOverviewComponent/PlatformOverview'
import QuestionPage from '../components/questionPageComponent/QuestionPage'
import FinalPage from '../components/finalPageComponent/FinalPage'


function MainPage() {
    return (
        <>
            <div className='main-page-container'>
                <MainComponent />
                <SecondPage />
                <GalleryPage />
                <AboutPage />
                <PlatformOverview />
                <QuestionPage />
                <FinalPage />
            </div>
        </>

    )
}

export default MainPage