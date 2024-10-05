import React from 'react'
import "./questionPage.css"

function QuestionPage() {
    return (
        <>
            <div className="question-container">
                <div className="question-first-section">
                    <h2>Вы спросите, для кого этот курс? </h2>
                    <ul>
                        <li>Новички без опыта? <span className="marker-sentence">Добро пожаловать! </span></li>
                        <li>Выпускники ульпана, жаждущие большего? <span className="marker-sentence">Мы ждем вас!</span></li>
                        <li>Продвинутые ученики, мечтающие говорить как коренные израильтяне? <span className="marker-sentence">Вам сюда! </span></li>
                        <li>Дети, подростки, взрослые - <span className="marker-sentence">наша платформа подходит всем!</span></li>
                    </ul>
                </div>
                <hr />
                <div className="question-content-section">
                    Дело не в том, что иврит сложен, Проблема в учебных программах, которые не делают акцент на важных аспектах.
                    <br />
                    При изучении иврита очень важно научиться говорить на нем бегло, автоматически, без запинок. Это требует совершенно иного подхода к обучению.
                    <span className="marker-sentence">Многие из вас знают иврит, но не умеют им пользоваться.</span>
                    <br />
                    Мы поможем вам переключиться с русского на иврит, <span className="marker-sentence">а не просто строить предложения.</span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default QuestionPage