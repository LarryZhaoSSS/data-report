<template>
  <common-card title="累计订单数" value="55,555">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">2,222,333</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted() {},
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false // 默认为true，与x轴两侧的默认边距
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [620, 432, 220, 534, 430, 220, 233],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
