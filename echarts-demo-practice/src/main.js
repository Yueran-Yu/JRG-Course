import * as echarts from 'echarts';

console.log(echarts)
const mainPage = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')
// based on prepared DOM, initialize echarts instance

const width = document.documentElement.clientWidth
mainPage.style.width = `${width}px`
mainPage.style.height = `${width * 1.2}px`
// mainPage.style.margin = `10px`
var myChart = echarts.init(mainPage);
let n = 0
let m = 0

function createKey() {
  n += 1
  return `2020-1-${n}`
}

function createValue() {
  m += 1
  return m
}

// specify chart configuration item and data
const dataName = 'Spent'
let xData = [createKey(), createKey(), createKey(), createKey(), createKey()]
let values = [createValue(), createValue(), createValue(), createValue(), createValue()]

var baseOption = {
  backgroundColor: '#c2ebfd',
  marginRight: '20px',
  title: {
    show: true,
    text: 'Sale',
    top: 10,
    right: 20
  },
  legend: {
    data: [dataName],
    top: 15,
  },
  xAxis: {
    type: 'category',
    data: xData
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    name: dataName,
    data: values,
    type: 'line',
    symbolSize: 10,
    lineStyle: {
      color: '#5470C6',
    },
    itemStyle: {
      color: 'red'
    }
  }]
};

var mediaQuery = [
  {
    query: {
      maxWidth: 500
    },
    option: {
      series: [{
        symbolSize: 5
      }]
    }
  }
]

let isLoading = false
// use configuration item and data specified to show chart
myChart.setOption({baseOption: baseOption, media: mediaQuery});
loadMoreButton.addEventListener('click', () => {
  if (isLoading) return

  myChart.showLoading()
  isLoading = true
  setTimeout(() => {
    const key = createKey()
    const value = createValue()
    xData = [...xData, key]
    values = [...values, value]
    myChart.setOption({
      xAxis:
        {
          data: xData
        },
      series: [{
        data: values
      }]
    })
    myChart.hideLoading()
    isLoading = false
  }, 200)
})

myChart.on('click', (e) => {
  console.log(e.name)
  console.log(e.dataIndex)
  console.log(e.data)
  window.open(`https://www.baidu.com/?time=${e.name}`)
})