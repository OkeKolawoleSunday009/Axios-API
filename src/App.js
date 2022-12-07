import React, { Component } from 'react'
import Cards from './Cards/Cards'
import Charts from './Charts/Charts'
import CountryPicker from './CountryPicker/CountryPicker'
import './App.css';
import { fetchData } from './API';

export class App extends Component {
 
 
   state = {
      data:{},
   
 }

  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({data: fetchedData});
    // console.log(fetchData);
  }
  render() {

    const { data } = this.state;

    return (
      <div className='container__main'>
        <h1>COVID- 19 TRACKER</h1>
        <Cards data = {data}/>
        <CountryPicker/>
        <Charts/>
      </div>
    )
  }
}

export default App
