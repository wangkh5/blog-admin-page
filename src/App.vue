<template>
  <div>
     <el-container>
      <el-aside width="140px">
          <h1>王凯华网站后台</h1>
          <el-menu default-active="1"
            class="el-menu-vertical-demo"
            router
           >
            <el-menu-item index="/articles">
              <i class="el-icon-document"></i>
              <span slot="title">文章管理</span>
            </el-menu-item>
            <el-menu-item index="/categories">
              <i class="el-icon-menu"></i>
              <span slot="title">分类管理</span>
            </el-menu-item>
            <el-menu-item index="/tags">
              <i class="el-icon-setting"></i>
              <span slot="title">标签管理</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <i class="el-icon-document"></i>
              <span slot="title">关于我</span>
            </el-menu-item>
          </el-menu>        
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      
    }
  }
</script>


<style lang="scss" scoped>

 
</style>
