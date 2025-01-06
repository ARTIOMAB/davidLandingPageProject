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
          Что делает нашу платформу особенной?
          Взгляните и проверьте некоторые темы, которые вы найдете на платформе,
          <br />
          <span className="marker-sentence">их просто больше нигде нет!</span>
          <br />
          Ни в количестве, ни в качестве. С нами вы получите доступ ко всему этому всего за одну покупку.
          <br />
          <br />
          Одной покупкой вы получаете доступ к платформе с неограниченным контентом на иврите,
          &nbsp;
          <span className="marker-sentence" >Каждый месяц выходят новые материалы,</span>
          <br />
          рабочие тетради, школы, спецкурсы, домашние задания, тесты, видео, советы...
          <br />
          Независимо от того, являетесь ли вы родителем, желающим выучить иврит или ищете своих детей для изучения иврита, с помощью одной покупки вы получите доступ к созданным материалам:
          &nbsp;
          <span className="marker-sentence">Для детей, подростков, взрослых.</span>
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