import React from 'react';
import './Card.css'
// import CountUp from 'react-countup';

export default function Cards({data:{confirmed, deaths, recovered}}) {
  // console.log(data);
 
  // if(!data.confirmed.value){
  //   return 'loading ....';
  // } 
  
   return (
  <div className='container'>
    <div className='content infected'>

      <div><h5>REAL DATA</h5></div>
      {confirmed.value}
    
      {/* <div>{new Date(data.lastUpdate).toDateString()}</div> */}
      <div>Number of active covid 19 cases</div>

    </div>
    <div className='content recovered'>

      <div><h5>Recovered</h5></div>
      {recovered.value}

      {/* <div>{new Date(props.data.lastUpdate).toDateString()}</div> */}
      <div>Number of active recovered covid 19 cases</div>

    </div>
    <div className='content death'>
      <div><h5>Death</h5></div>
      {deaths.value}

      {/* <div>{new Date(props.data.lastUpdate).toDateString()}</div> */}
      <div>Number of active death covid 19 cases</div>

    </div>


 </div>
  )
}
