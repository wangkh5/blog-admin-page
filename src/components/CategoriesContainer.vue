<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="添加分类">
        <el-input v-model="category.name" size="mini" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="addCategory()">保存</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="创建日期" prop="createTime" :formatter="formatTime">
      </el-table-column>
      <el-table-column label="分类名称" prop="name">
      </el-table-column> 
      <el-table-column  align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        tableData: [],
        search: '',
        category: {},
      }
    },
    created() {
      this.getCategoryList();
    },
    methods: {
      // 获取所有分类
      getCategoryList(){
        this.$http.get("category/findAll")
        .then(result => {
          this.tableData = result.body;
        });
      },
      
      formatTime(row, column, cellValue, index){
        return moment(cellValue).format("YYYY-MM-DD HH:mm");
      },
      
      handleEdit(index, row) {
        console.log(index, row);
      },

      // 添加分类
      addCategory(){
        this.$http.post("category/add",this.category)
        .then(result => {
          if(result.body.success){
            this.category = {}
            this.getCategoryList()
          }
        });
      },
      // 删除分类
      handleDelete(index, row) {
        console.log(index, row);
         this.$http.get("category/delete?ids="+row.id)
        .then(result => {
          if(result.body.success){
            this.getCategoryList()
          }
        });
      },
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
