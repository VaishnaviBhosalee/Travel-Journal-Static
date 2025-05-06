import '../App.css'
import Geirangerfjord from '../assets/Geirangerfjord.png'

function Geord() {
  return(
    <div class='card'>
      <img class='image' src={Geirangerfjord} alt='Geirangerfjord'/>
      <div class='textContainer'>
        <div class='head'>
          <div class='top'>
            <h6>NORWAY</h6>
            <a href='https://maps.app.goo.gl/4toPGW2BLgg8GHqr6' target='_blank' id='viewLink'>View on Google Maps</a>
          </div>
          <h2>Geirangerfjord</h2>
        </div>
        <div class='info'>
          <h8 class='content'>01 Oct, 2021 - 18 Nov, 2021</h8>
          <p class='content'>Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
        </div>
      </div>
    </div>
  )
}

export default Geord