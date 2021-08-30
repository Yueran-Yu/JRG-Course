import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const ReactEcharts = (props) => {
  const {option, loading} = props
  const container = useRef(null)
  const chart = useRef(null)
  useEffect(() => {
    console.log(container.current)
    //initialize echarts
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width - 20}px`
    container.current.style.height = `${width * 1.2}px`
    chart.current = echarts.init(container.current)

  }, [])

  useEffect(() => {
    chart.current.setOption(option)
  }, [option])

  useEffect(() => {
    loading ? chart.current.showLoading() : chart.current.hideLoading()
  }, [loading])
  return (
    <div ref={container}/>
  )
}