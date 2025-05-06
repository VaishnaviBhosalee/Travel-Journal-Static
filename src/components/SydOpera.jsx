import '../App.css'
import SydneyOperaHouse from '../assets/SydneyOperaHouse.png'

function SydOpera() {
  return(
    <div class='card'>
      <img class='image' src={SydneyOperaHouse} alt='Sydney Opera House'/>
      <div class='textContainer'>  
        <div class='head'>
          <div class='top'>
            <h6>AUSTRALIA</h6>
            <a href='https://maps.app.goo.gl/Espwxp6WMAcp28U38' target='_blank' id='viewLink'>View on Google Maps</a>
          </div>
          <h2>Sydney Opera House</h2>
        </div>
        <div class='info'>
          <h8 class='content'>27 May, 2021 - 8 Jun, 2021</h8>
          <p class='content'>The Sydney Opera House is a multi-venue performing arts centre in Sydney located on the foreshore of Sydney Harbour, it is widely regarded as one of the 20th century's most famous and distinctive buildings.</p>
        </div>
      </div>
    </div>
  )
}

export default SydOpera