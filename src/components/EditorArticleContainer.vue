<template>
  <div>
    {{this.$route.params.id}}
    <el-form label-width="40px">
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
        <router-link to="/articles">
          <el-button size="medium">取消</el-button>
        </router-link>
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
      this.getArticle();
    },
    methods: {
      // 新增或者修改
      save(){
        if(this.blog.id > 0) {
          this.$http.post("blog/update",this.blog)
          .then(result => {          
            this.$router.push("/articles");
          });
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
      },

      // 修改 文章内容回显
      getArticle() {
        if(this.$route.params.id){
          this.$http.get("blog/findOne?id="+this.$route.params.id)
            .then(result => {
              this.blog = result.body;
              console.log(result.body)
          });
        }
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
