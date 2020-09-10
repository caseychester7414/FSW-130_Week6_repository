import React from 'react'
import slideshow from '../video/slideshow.mp4'


const Home = ()=>{
   
  return(
<div className='home'>
          
    <h1>Binge Worthy TV and Movies</h1>

      <video width='750' height='500' autoPlay={true} loop={true} muted={true} >
      <source src={slideshow} type='video/mp4'/>
     </video>
    
</div>
  )

}

export default Home