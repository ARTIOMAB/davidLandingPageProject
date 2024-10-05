import React from 'react'
import "./finalPage.css"

function FinalPage() {
    return (
        <>
            <div className="final-container">
                <div className="final-opening-section">
                    <h2>Пришло время осуществить ваши мечты</h2>

                    мы знаем и уверены в нашей &nbsp;
                    <span className="marker-sentence">программе </span>
                    Что эта платформа приведет к
                    <span className="marker-sentence"> осуществлению ваших мечтаний </span>
                    не только говорить на иврите и понимать а размышлять на иврите это намного важнее чем просто знать пару слов
                </div>

                <div className="final-second-section">
                    <h3> для нас будет привилегия, если вы доверитесь нам</h3>
                    У нас нет цели продать вам просто курс
                    <br />
                    <span className="marker-sentence">Наша цель - чтобы вы знали иврит</span>
                    <br />
                    И не просто иврит, а иврит, который поможет вам в повседневной жизни!
                    <br />
                    Поэтому мы открыли для вас доступ к бесконечному контенту на иврите по одной покупке!

                </div>

                <div id='finalPage-list' className="final-list-section">
                    <h2>По одной покупке вы получаете</h2>


                    <div className='list'>
                        <div className='li-R' id='item-1'>
                            <span>Неограниченный доступ к обширной базе учебных материалов</span>
                        </div>
                        <div className='li-L' id='item-2'>
                            <span>Все материалы с транскрипцией русскими буквами</span>
                        </div>
                        <div className='li-R' id='item-3'>
                            <span>Курсы отработки скорости речи и понимания иврита</span>
                        </div>
                        <div className='li-L' id='item-4'>
                            <span>Групповые онлайн-уроки с учителем в течение недели</span>
                        </div>
                        <div className='li-R' id='item-5'>
                            <span>Групповая онлайн-практика с учителем в течение недели</span>
                        </div>
                        <div className='li-L' id='item-6'>
                            <span>Изучение иврита профессиональных специальностей</span>
                        </div>
                        <div className='li-R' id='item-7'>
                            <span>Курсы для всех уровней владения ивритом</span>
                        </div>
                        <div className='li-L' id='item-8'>
                            <span>Доступ к закрытой группе для вопросов и общения с преподавателями</span>
                        </div>
                        <div className='li-R' id='item-9'>
                            <span>Курсы разговорного иврита на каждый день с различными темами, такими как: банк, почта, покупки, подготовка к собеседованию, сленг и еще</span>
                        </div>
                        <div className='li-L' id='item-10'>
                            <span>Специальные тренировки для продвинутых</span>
                        </div>
                        <div className='li-R' id='item-11'>
                            <span>Подкасты с профессионалами, которые помогут вам практиковать иврит и откроют для вас новые карьерные идеи</span>
                        </div>
                        <div className='li-L' id='item-12'>
                            <span>Интенсивная практика и домашние задания с проверкой и экзамены</span>
                        </div>
                        <div className='li-R' id='item-13'>
                            <span>Вы получите более 7 рабочих тетрадей, причем самая короткая тетрадь содержит 50 страниц</span>
                        </div>

                    </div>


                </div>
                <div className="final-buttons-section">
                    <span className="goodby-sentence">И самое крутое, что контент только растет ,Контент не заканчивается, всегда будут добавляться материалы, включая рабочие тетради и видео
                        И у вас будет доступ к контенту вечно
                    </span>
                </div>

                <div className='final-button-container'>
                    <button className='button-63'>Я хочу купить</button>
                    <button className='button-63'><a href={import.meta.env.VITE_SECONDD_WHATSAPP_MESSAGE} target='_blank'>получить  консультацию</a></button>
                    <button className='button-63'><a href='#top'>к началу страницы</a></button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default FinalPage