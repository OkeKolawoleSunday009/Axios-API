import React from 'react';
import './Card.css'
// import CountUp from 'react-countup';

export default function Cards(props) {
//   console.log(props.data.lastUpdate);
 
//   if(!data.confirmed.value){
//     return 'loading ....';
//   } 
  
   return (
  <div className='container'>
    <div className='content infected'>

      <div><h5>REAL DATA</h5></div>
     
      {/* {props.data.confirmed.value} */}
  
      {/* <div>{new Date(props.data.lastUpdate).toDateString()}</div> */}
      <div>Number of active covid 19 cases</div>

    </div>
    <div className='content recovered'>

      <div><h5>Recovered</h5></div>
      {/* {props.data.recovered.value} */}

      {/* <div>{new Date(props.data.lastUpdate).toDateString()}</div> */}
      <div>Number of active recovered covid 19 cases</div>

    </div>
    <div className='content death'>
      <div><h5>Death</h5></div>
      {/* {props.data.deaths.value} */}

      {/* <div>{new Date(props.data.lastUpdate).toDateString()}</div> */}
      <div>Number of active death covid 19 cases</div>

    </div>


 </div>
  )
}
