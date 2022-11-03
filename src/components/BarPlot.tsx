import React from 'react'
import ReactECharts from 'echarts-for-react';
import { WineData } from '../Data/data';

let malic_acid: number[] = [];
let option: {};
let alcohol: number[];

const BarPlot: React.FC = () => {

  //Gives an Array that contain all Alcohol type
  alcohol = WineData
      .map(item => item.Alcohol)
      .filter((value, index, self) => self.indexOf(value) === index)

  //For each alcohol type find the avarage of 'Malic Acid' and push in to malic_acid Array
  for (let i = 0; i < alcohol.length; i++) {
    const list = WineData.filter(item => item.Alcohol === alcohol[i])
    const list_avg: string = (list.reduce((acc, i) => acc + Number(i['Malic Acid']), 0) / list.length).toFixed(2)
    malic_acid.push(Number(list_avg))
  }

  option = {
      title: {
        text: 'Bar Plot'
      },
      tooltip: {},
      legend: {
        data: ['Avg. Malic Acid']
      },
      xAxis: {
        data: alcohol,
        name: 'Alcohol'
      },
      yAxis: {
          name: 'Avg. Malic Acid'
      },
      series: [
        {
          name: 'Avg. Malic Acid',
          type: 'bar',
          data: malic_acid,
        }
      ]
  };

  return (
      <ReactECharts option={option} />
  )
}

export default BarPlot