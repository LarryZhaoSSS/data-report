<template>
  <div class="bmap">
    <v-chart :options="options" />
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import { MAPKEY } from '../../config'
const testPoint = [
  {
    name: '海门',
    value: [121.15, 31.89, 80]
  },
  {
    name: '南京',
    value: [118.78, 32.04, 100]
  }
]
const testPoint2 = [
  {
    name: '北京',
    value: [116.404, 39.9133, 180]
  },
  {
    name: '上海',
    value: [116.4759, 31.222836, 200]
  }
]
export default {
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      title: {
        text: '外卖大盘',
        subtext: '销售趋势统计',
        sublink: 'https://baidu.com'
      },
      bmap: {
        key: MAPKEY,
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            },
            {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            },
            {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }
          ]
        }
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: testPoint,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: val => {
            return val[2] / 5
          },
          label: {
            show: false,
            position: 'left',
            formatter: v => {
              return `${v.data.name} - ${v.data.value[2]}`
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 2',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: testPoint2,
          symbolSize: val => {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          label: {
            formatter: val => {
              return `${val.data.name} - ${val.data.value[2]}`
            },
            position: 'right',
            show: true
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke'
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bmap {
  height: 100%;
  width: 100%;
}
::v-deep .echarts {
  width: 100%;
  height: 100%;
}
</style>
