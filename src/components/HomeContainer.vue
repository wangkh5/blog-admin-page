<template>
  <div>
    <el-carousel :interval="4000" type="card" height="190px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>本周热门</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>

    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最新文章</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
  .el-card {
    margin-top: 10px;
  }
 .el-pagination {
    text-align: center;
    margin-top: 10px;
  }


  // 测试样式
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
