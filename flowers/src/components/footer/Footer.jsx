import React from 'react'
import face from '../../assets/facebok.svg'
import insta from '../../assets/insta.svg'
import link from '../../assets/link.svg'
import twit from '../../assets/twiter.svg'
import './footer.css'

function Footer() {
  return (
    <div className='footer container'>
      <div className="info">
        <div className="info1">
          <h3> exclisive </h3>
          <h5> subscribe </h5>
          <p> get 10% off your first order </p>
        </div>
        <div className="info2">
          <h3> support </h3>
          <p> exclusive@gmail.com </p>
          <p> +88015-88888-9999 </p>
        </div>
        <div className="info3">
          <h3> account </h3>
          <p> register </p>
          <p> shop </p>
        </div>
        <div className="info4">
          <h3> download app </h3>
          <p> save $3 with app new user only </p>
        <div className="apps">
          <img src={twit}  />
          <img src={link}  />
          <img src={insta} />
          <img src={face}  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
