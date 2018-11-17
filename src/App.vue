<template>
  <div>
     <el-container>
        <el-header>
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/messages">留言</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/links">友链</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/archives">归档</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/about">关于</router-link></el-menu-item>
          </el-menu>
        </el-header>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-aside width="30%">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>关于我</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>分类</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>标签云</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>           
          </el-aside>
        </el-container>
        <el-footer>
          <hr>
          <div class="footer">
            王凯华 版权所有 本博客后端采用Springboot、Mybatis技术，前端采用vue、element、webpack等技术进行构建的SPA网站
            2018
          </div>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.el-header {
  padding: 0 ;
   
}

.el-card {
  margin-top: 10px;
}

.footer{
  margin-top: 20px;
  text-align: center;
  color: #666666;
  font-size: 12px;
}

</style>
