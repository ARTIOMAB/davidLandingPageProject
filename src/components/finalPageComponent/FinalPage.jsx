import "./finalPage.css"
import Dust from "../../assets/dust.png"




function FinalPage() {

    return (
        <>
            <div className="final-container">

                <div className="final-opening-section">
                    <img src={Dust}
                        alt="The image was not found"
                        className="background-dust" />

                    <h2>Пришло время осуществить ваши мечты</h2>

                    мы знаем и уверены в нашей
                    программе
                    Что эта платформа приведет к
                    осуществлению ваших мечтаний
                    не только говорить на иврите и понимать а размышлять на иврите это намного важнее чем просто знать пару слов
                </div>

                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />

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
                <img src={Dust}
                    alt="The image was not found"
                    className="background-dust" />


                <div id='finalPage-list' className="final-list-section">

                    <h2>По одной покупке вы получаете</h2>

                    <div className='list'>
                        <div className={`li-R`}>
                            <span>Неограниченный доступ к обширной базе учебных материалов</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Все материалы с транскрипцией русскими буквами</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Курсы отработки скорости речи и понимания иврита</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Групповые онлайн-уроки с учителем</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Групповая онлайн-практика с учителем</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Изучение иврита профессиональных специальностей</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Полные подготовки учеников к экзаменом и к багрутом</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Доступ к закрытой группе для вопросов и общения с преподавателями</span>
                        </div>

                        <div className={`li-R`}>
                            <span>Курсы разговорного иврита на каждый день с различными темами, такими как: банк, почта, покупки, подготовка к собеседованию, сленг и еще</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Специальные тренировки для продвинутых</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Подкасты с профессионалами, которые помогут вам практиковать иврит и откроют для вас новые карьерные идеи</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Интенсивная практика и домашние задания с проверкой и экзамены</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Много рабочих тетрадей, каждая из которых состоит более чем из 50 страниц</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Небольшая часть изучаемых предметов: времена, перелеты, фильмы и сериалы, аренда квартиры, рестораны и кафе, подготовка к армии</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Разговорный курс иврита в WhatsApp</span>
                        </div>
                        <div className={`li-L`}>
                            <span>Работаем с искусственным интеллектом</span>
                        </div>
                        <div className={`li-R`}>
                            <span>Курс обучения акценту с профессионалом</span>
                        </div>
                    </div>

                    <img src={Dust}
                        alt="The image was not found"
                        className="background-dust" />
                </div>
                <div className="final-buttons-section">
                    <span className="goodby-sentence"> контент только растет ,Контент не заканчивается, каждый месяц добавляются материалы, включая рабочие тетради и видео
                        <br />
                        <br />
                        И у вас будет доступ к контенту вечно
                    </span>
                </div>
                <div className='final-button-container'>
                    <button className='button-63'><a href='https://direct.tranzila.com/ttxabramov19' target='_black'>Я хочу купить</a></button>
                    <button className='button-63'><a href={import.meta.env.VITE_MAIN_WHATSAPP_MESSAGE} target='_blank'>получить  консультацию</a></button>
                    <button className='button-63'><a href='#top'>к началу страницы</a></button>
                </div>
            </div>
        </>
    )
}

export default FinalPage