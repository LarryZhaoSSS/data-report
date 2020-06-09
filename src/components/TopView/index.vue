<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <today-users></today-users> </el-card
      ></el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'
import TotalOrders from '../TotalOrders'
export default {
  components: {
    TotalSales,
    TodayUsers,
    TotalUsers,
    TotalOrders
  }
}
</script>

<style lang="sass" scoped></style>
