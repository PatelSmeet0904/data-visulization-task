import React from 'react'
import ReactECharts from 'echarts-for-react';
import { WineData } from '../Data/data';

let color_intensity: (number | string)[] 
let option: {};
let hue: number[]

const ScatterPlot: React.FC = () => {

    //Creates An Array of Color intensity and Hue from WinData
    color_intensity = WineData.map(item => item['Color intensity'])
    hue = WineData.map(item => item.Hue)
    
    option = {
        title: {
            text: 'Scatter Plot'
        },
        xAxis: {
            data: color_intensity,
            name: 'Color Intensity'
        },
        yAxis: {
            name: 'hue',
        },
        series: [
            {
                type: 'scatter',
                data: hue
            }
        ]
    };
   
    return <ReactECharts option={option} />;
}

export default ScatterPlot