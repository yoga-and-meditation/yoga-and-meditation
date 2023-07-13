import name from '../assets/images/name.png'
import gif1 from '../assets/images/gif1.png'
function Hero() {
    return (
      <div className='hero'> 
      <div className='hero-words'>
       <h1 className='hero-heading'>Yoga</h1>
       <img src={name} className="name"/></div>
       <div className='ball'>
     </div>
     <div><img src={gif1} className='gif'></img></div>
       
      </div>
    )
  }
  
  export default Hero