import React from 'react'
import "./questionPage.css"
import Dust from "../../assets/dust.png"


function QuestionPage() {
    return (
        <>
            <div className="question-container">
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />
                <div className="question-first-section">
                    <h2>Вы спросите, для кого этот курс? </h2>
                    <ul>
                        <li>Новички без опыта? <span className="marker-sentence">Добро пожаловать! </span></li>
                        <li>Выпускники ульпана, жаждущие большего? <span className="marker-sentence">Мы ждем вас!</span></li>
                        <li>Продвинутые ученики, мечтающие говорить как коренные израильтяне? <span className="marker-sentence">Вам сюда! </span></li>
                        <li>Дети, подростки, взрослые - <span className="marker-sentence">наша платформа подходит всем!</span></li>
                    </ul>
                </div>
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />
                <hr />
                <div className="question-content-section">
                    Дело не в том, что иврит сложен, Проблема в учебных программах, которые не делают акцент на важных аспектах.
                    <br />
                    При изучении иврита очень важно научиться говорить на нем бегло, автоматически, без запинок. Это требует совершенно иного подхода к обучению.
                    <br />
                    <br />
                    Многие из вас знают иврит, но не умеют им пользоваться.
                    <br />
                    Мы поможем вам переключиться с русского на иврит, а не просто строить предложения.
                </div>
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />
            </div>
            <hr />
        </>
    )
}

export default QuestionPage