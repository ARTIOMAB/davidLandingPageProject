import React, { useEffect, useState } from "react";
import "./mainComponent.css"

function MainComponent() {

    const [showButtons, setShowButtons] = useState(false)
    const [showSecondText, setShowSecondText] = useState(false)


    useEffect(() => {

        const timerL = setTimeout(() => {
            setShowSecondText(true);
        }, 1000);

        const timerR = setTimeout(() => {
            setShowButtons(true);
        }, 2500);

        return () => {
            clearTimeout(timerL);
            clearTimeout(timerR);
        }
    }, []);

    return (
        <main className="onboarding">
            <section className="heroSection">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3add5a8d63de2a3e90eb71e3c544f049b3bbd298b36ec1cb4a6d5e0a6ae5c555?placeholderIfAbsent=true&apiKey=984c1282f9b74085ad6fb6ba1cadc73b"
                    alt="Onboarding hero background"
                    className="heroImage"
                />
                <header className="header">
                    <h1 className="title">секреты иврита</h1>
                </header>
                <div className="content">
                    {showSecondText && (
                        <h3 className="subtitle">
                            Уникальная платформа для изучения иврита
                        </h3>
                    )
                    }
                    {showSecondText && (
                        <p className="description">
                            для изучения настоящего, живого иврита - такого, на котором говорят на улицах Тель-Авива и в офисах Хайфы!
                        </p>
                    )}

                </div>
                {showButtons && (
                    <div className="button-section">
                        <button className="button-63"><a href="https://direct.tranzila.com/ttxabramov19" target="_blank">хочу начать учиться</a></button>
                        <button className="button-63"><a href={import.meta.env.VITE_MAIN_WHATSAPP_MESSAGE}>у меня есть вопросы</a></button>
                    </div>

                )}

            </section>
        </main>
    );
}

export default MainComponent;