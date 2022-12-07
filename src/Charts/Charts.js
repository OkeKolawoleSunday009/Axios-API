import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../API';
import {Line, Bar } from "react-chartjs-2";

export default function Charts() {

  const [dailyData, setDailyData ] = useState({});


  useEffect (() => {
      const fetchAPI = async () => {
        setDailyData (
          await fetchDailyData()
        );
      }
      fetchAPI();
  });

  const lineChart = ( 
    dailyData.length
    ?(  
    <Line
     data = {{
      labels: dailyData (({date}) => date),
      datasets: [{
        data: dailyData.map(({confirmed}) => confirmed),
        labels: "infected",
        borderColor: 'd3333ff',
        fill: true
      }, {
        data: dailyData.map(({deaths}) => deaths),
        labels: "Deaths",
        borderColor: 'red',
        backgroundColor:"rgba(255,0,0,0.5)",
        fill: true
      }]
     }}
    />) : null

  );
  return (
    <div>
      Charts
      {lineChart}
    </div>
  )
}
