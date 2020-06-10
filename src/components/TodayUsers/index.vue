<template>
  <common-card title="今日用户数" value="81,014">
    <template>
      <div id="today-users-chart" :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted() {
    const charDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(charDom, 'light')
    chart.setOption({
      color: ['#3398DB'],
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 100]
        }
      ],
      xAxis: {
        type: 'category',
        show: false,
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '2:00'
        ],
        barWidth: '60%'
      },
      yAxis: {
        show: false
      },
      grid: { top: 0, left: 0, right: 0, bottom: 0 }
    })
  }
}
</script>

<style lang="scss" scoped></style>
