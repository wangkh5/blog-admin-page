<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="添加标签">
        <el-input v-model="tag.name" size="mini" placeholder="请输入标签名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="addtag()">保存</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="标签名称" prop="name">
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
        tag: {},
      }
    },
    created() {
      this.getTagList();
    },
    methods: {
      // 获取所有标签
      getTagList(){
        this.$http.get("tag/findAll")
        .then(result => {
          this.tableData = result.body;
        });
      },
      
      handleEdit(index, row) {
        console.log(index, row);
      },

      // 添加标签
      addtag(){
        this.$http.post("tag/add",this.tag)
        .then(result => {
          if(result.body.success){
            this.tag = {}
            this.getTagList()
          }
        });
      },
      // 删除标签
      handleDelete(index, row) {
        console.log(index, row);
         this.$http.get("tag/delete?ids="+row.id)
        .then(result => {
          if(result.body.success){
            this.getTagList()
          }
        });
      },
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
