<template>
  <div class="liquid-fill" id="liquid-container"></div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  mounted() {
    const chart = this.$echarts.init(
      document.getElementById('liquid-container')
    )
    const data = [0.68, 0.5, 0.4, 0.3]
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data,
          color: ['red', 'blue', 'yellow'],
          itemStyle: {
            opacity: 0.4
          },
          emphasis: {
            itemStyle: {
              opacity: 0.2
            }
          }
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.liquid-fill {
  height: 400px;
  width: 400px;
}
</style>
