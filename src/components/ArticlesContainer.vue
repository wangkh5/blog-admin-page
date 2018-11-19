<template>
  <div>
    <router-link to="/articles/editorarticle">
      <el-button type="primary" size="mini">发表文章</el-button>
    </router-link>
    <hr>
    <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="标题" prop="title">
      </el-table-column>
      <el-table-column label="所属分类" prop="categoryId">
      </el-table-column>
      <el-table-column label="创建日期" prop="createTime" :formatter="formatTime">
      </el-table-column>
      <el-table-column label="修改时间" prop="updateTime" :formatter="formatTime">
      </el-table-column> 
      <el-table-column  align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入文章标题搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="mini"  @click="handleDelete(scope.$index, scope.row)">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="total, prev, pager, next" :page-size="pageSize"
      :total="totalRecord" @current-change="findPage" :current-page="currentPage">
    </el-pagination>

  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        visible2: false,
        tableData: [],
        search: '',
        currentPage: 1,
        pageSize: 7,
        totalRecord: 0,
      }
    },
    created() {
      this.findPage(this.currentPage);
    },
    methods: {
      // 分页条件查询
      findPage(currentPage){
        this.currentPage = currentPage;
        this.$http.get("blog/findPage?pageNum="+this.currentPage+"&pageSize="+this.pageSize)
        .then(result => {
          this.tableData = result.body.rows;
          this.totalRecord = result.body.totalRecord;
        });
      },
      // 格式化时间显示
      formatTime(row, column, cellValue, index){
        return moment(cellValue).format("YYYY-MM-DD HH:mm");
      },
      // 编辑
      handleEdit(index, row) {
        console.log(index, row);
      },
      // 删除
      handleDelete(index, row) {
        console.log(index, row);
        this.$http.get("blog/delete?ids="+row.id)
        .then(result => {
          if(result.body.success){
            this.findPage(this.currentPage);
          }else{
            alert(result.body.message);
          }
        });
      }
    }
    
  }
</script>


<style lang="scss" scoped>
  .el-pagination {
    text-align: center;
    margin-top: 20px;
}
 
</style>
