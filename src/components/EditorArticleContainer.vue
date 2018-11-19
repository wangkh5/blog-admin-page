<template>
  <div>
    <el-form label-width="40px" :model="blog">
      <el-form-item label="标题">
        <el-input placeholder="请输入文章标题" v-model="blog.title" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="blog.categoryId" placeholder="请选择">
          <el-option
            v-for="category in categoryList"
            :key="category.id"
            :label="category.name"
            :value="category.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor :boxShadow="false" :scrollStyle="true" :navigation="true" v-model="blog.content"/>
        <el-button type="primary" size="medium" @click="save">发表</el-button>
        <el-button size="medium">取消</el-button>
      </el-form-item>
    </el-form>

    <!-- <mavon-editor :toolbarsFlag="false" :editable="false" 
    :subfield="false" :defaultOpen="preview" v-model="value"/> -->
  </div>
  
</template>

<script>
 export default {
    data() {
      return {
        blog: {},
        categoryList: []
      }
    },
    created() {
      this.getCategoryList();
    },
    methods: {
      // 新增或者修改
      save(){
        if(this.blog.id) {
          console.log("还未实现修改");
        }else {
          console.log(this.blog)
          this.$http.post("blog/add",this.blog)
          .then(result => {          
            this.$router.push("/articles");
          });
        }
      },
      
      // 回显分类列表
      getCategoryList(){
        this.$http.get("category/findAll")
        .then(result => {
          this.categoryList = result.body;
        });
      }
      
    }
 }
</script>


<style lang="scss" scoped>
  .markdown-body {
    height: 425px;
  } 

  .el-form-item {
    margin-bottom: 5px;
  }
 
</style>
