import name from '../assets/images/name.png'
import gif1 from '../assets/images/gif1.png'
function Hero() {
    return (
<div >
  <div className='hero' ></div>
      <div >
       <h1 className='hero-heading'>Yoga</h1>
       <img src={name} className="name"/></div>
       <div className='ball'><img src={gif1} className='gif'></img>
     </div>
 
      </div>
    )
  }
  
  export default Hero