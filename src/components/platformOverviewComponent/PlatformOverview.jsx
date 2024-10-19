import React from 'react'
import "./platformOverview.css"
import Dust from "../../assets/dust.png"


function PlatformOverview() {
  return (
    <>
      <div className="platform-container">
        <img src={Dust}
          alt="The image was not found"
          className="background-dust" />
        <div className="platform-first-section">
          Одной покупкой
          <span className="marker-sentence">&nbsp;вы получаете доступ к платформе с неограниченным контентом на иврите.</span>
          <br />
          <span className="marker-sentence" >начиная с курсов базового иврита и заканчивая практикой скорости речи.</span>
          <br />
          на иврите и пониманием быстрого иврита, когда с вами разговаривают.
          <br />
          <span className="marker-sentence">Вы не найдете никаких дополнительных оплат внутри платформы!</span>
        </div>

        <img src={Dust}
          alt="The image was not found"
          className="background-dust" />
        <div className="platform-second-section">
          мы, как учителя на протяжении многих лет, слышали о болезненных и сумасшедших суммах, которые берут за обучение ивриту, мы видели наших учеников, отчаявшихся и плачущих, потому что они поняли, что их профессия обесценилась, родителей, которые хотят дать своим детям все знания, чтобы у них были успешные профессии, и вкладывают свои последние деньги!
          <br />
          <br />

          <h3> Поэтому мы создали платформу, которая объединит в себе весь материал, необходимый вам для успеха, по смешной цене!</h3>
        </div>
        <img src={Dust}
          alt="The image was not found"
          className="background-dust" />
      </div>
    </>
  )
}

export default PlatformOverview