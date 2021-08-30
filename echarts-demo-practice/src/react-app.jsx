import React, {useState} from 'react';
import {ReactEcharts} from "./react-echarts";

export function ReactApp() {
  const dataName = 'Spent'
  const [option, setOption] = useState({
    backgroundColor: '#c2ebfd',
    marginRight: '20px',
    title: {
      show: true,
      text: 'Sale',
      top: 10,
      right: 20,
      color: 'black'
    },
    legend: {
      data: [dataName],
      top: 15,
    },
    xAxis: {
      type: 'category',
      data: ['2021-1-1', '2021-1-2']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: dataName,
      data: [1, 2],
      type: 'line',
      symbolSize: 10,
      lineStyle: {
        color: '#5470C6',
      },
      itemStyle: {
        color: 'red'
      }
    }]
  })
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    if (loading) {
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOption({
        xAxis: {
          data: ['2021-1-1', '2021-1-2', '2021-1-3']
        },
        series: [{
          data: [1, 2, 3]
        }]
      })

    }, 2000)
  }

  return (
    <div>
      <h1> Hello</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>Load More</button>
    </div>

  )
}