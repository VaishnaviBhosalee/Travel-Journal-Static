import '../App.css'
import MountFuji from '../assets/MountFuji.png'

function MtFuji() {
  return(
    <div class='card'>
      <img class='image' src={MountFuji} alt='Mount Fuji'/>
      <div class='textContainer'>  
        <div class='head'>
          <div class='top'>
            <h6>JAPAN</h6>
            <a href='https://maps.app.goo.gl/iK19Bs5wRoakn8ea8' target='_blank' id='viewLink'>View on Google Maps</a>
          </div>  
          <h2>Mount Fuji</h2>
        </div>
        <div class='info'>
          <h8 class='content'>12 Jan, 2021 - 24 Jan, 2021</h8>
          <p class='content'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters(12,380 feet). Mount Fuji is the single most popular tourist spot in Japan for both Japanese and foreign tourits.</p>
        </div>
        </div>
    </div>
  )
}

export default MtFuji
