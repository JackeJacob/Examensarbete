import React from 'react';
import ReactDOM from 'react-dom/client';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { sonifyData } from './sonifyData';


const options ={
  title: {
    text: 'World of Warcraft Subscriber Numbers'
  },
  chart: {
    type: 'column'
  },
  yAxis: {
    title: {
      text: 'Millions of Subscribers'
    }
  },
  xAxis: {
    type: 'category'
  },
  series: [
    {
      name: 'Estimated subscribers',
      data: [{name: '2005', y:5},
      {name: '2006', y:6},
      {name: '2007', y:10},
      {name: '2008', y:11.5},
      {name: '2009', y:11.5},
      {name: '2010', y:12},
      {name: '2011', y:10.2},
      {name: '2012', y:9.6},
      {name: '2013', y:7.8},
      {name: '2014', y:10},
      {name: '2015', y:5.5},
      {name: '2016', y:5.7},
      {name: '2017', y:5.4},
      {name: '2018', y:5.2},
      {name: '2019', y:5},
      {name: '2020', y:4.9},
      {name: '2021', y:4.7},
      {name: '2022', y:4.6}
    ]
    }
  ]
}

const myPage = (
  <><div class="container-fluid p-5 my-5 bg-dark text-white text-center">
    <h1><b>Welcome to Your Data Sonifier</b></h1>
    <p></p>
    <button type="button" class="btn btn-light" id="sonify" onClick="sonifyData()"><b>Sonify Data</b></button>
  </div><div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div></>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);