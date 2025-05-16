import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <main className="home">
      <h1>Bienvenue dans l'univers de Jérôme</h1>

      <div className="info-block">
        <p>Pour vous guider, je vais vous expliquer ce que vous pouvez trouver sur ce site.</p>
      </div>

      <div className="info-block">
        <p>📁 Dans la section <strong>"Projets"</strong>, vous découvrirez mes réalisations personnelles.</p>
      </div>

      <div className="info-block">
        <p>🧩 Vous trouverez mes extensions Chrome — n'hésitez pas à les installer, elles sont très sympathiques !</p>
      </div>

      <div className="info-block">
        <p>🚀 Et aussi mes autres sites et mes projets plus poussés.</p>
      </div>

      <div className="info-block">
        <p>👤 Dans la section <strong>"À propos"</strong>, vous trouverez quelques informations sur moi.</p>
      </div>

      <div className="info-block">
        <p>💡 Ce sera surtout un récapitulatif de mes langages de programmation.</p>
      </div>

      <div className="info-block">
        <p>📬 Enfin, vous pouvez me contacter dans la section <strong>"Contact"</strong>.</p>
      </div>

      <div className="info-block final-message">
        <p>✨ J'espère que vous trouverez ce que vous cherchez !</p>
        <p>PS : N'oubliez pas d'envoyer un mail si vous apprécié mon site</p>
      </div>
    </main>
  )
}

export default Home
