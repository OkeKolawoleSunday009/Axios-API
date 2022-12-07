import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ()=> {
    try{
      const {data:{confirmed, deaths, recovered}} = await axios.get(url);
    //console.log(confirmed, deaths, recovered);
    

      const modifiedData = {
        confirmed,
        recovered,
        deaths,
      }

        return modifiedData;
       
        
    }
    catch (error){

    }
}

export const fetchDailyData = async ()=>{
  try{

    const {data} = await axios.get(`${url}/daily`);
     
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,

    }));
     
     return modifiedData;
    // console.log(data);
  }catch(error){

  }
}