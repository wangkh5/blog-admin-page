<template>
  <div>
    <el-form label-width="40px">
      <el-form-item label="标题">
        <el-input placeholder="请输入文章标题" v-model="blog.title" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="blog.categoryId" placeholder="请选择分类" size="medium">
          <el-option
            v-for="category in categoryList"
            :key="category.id"
            :label="category.name"
            :value="category.id">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="标签">
        <el-select v-model="blog.tagIdList" multiple placeholder="请选择标签" size="medium">
          <el-option
            v-for="tag in tagList"
            :key="tag.id"
            :label="tag.name"
            :value="tag.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="摘要">
        <el-input type="textarea" v-model="blog.digest" size="medium" rows="3"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor :boxShadow="false" :scrollStyle="true" :navigation="true" v-model="blog.content"
        ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
        <el-button type="primary" size="medium" @click="save">发表</el-button>
        <router-link to="/articles">
          <el-button size="medium">取消</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
 export default {
    data() {
      return {
        blog: {},
        categoryList: [],
        tagList: [],
      }
    },
    created() {
      this.getCategoryList();
      this.getArticle();
      this.getTagList();
    },
    methods: {
      $imgAdd(pos, $file){
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('image', $file);
        let config = {
          headers:{'Content-Type':'multipart/form-data'},
          emulateJSON:true
        }; 
        this.$http.post('qiniu/uploadImg',formdata,config)
        .then(response => {
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(pos, response.bodyText);
        })
      },

      $imgDel(pos){
        // delete this.img_file[pos];
      },

      // 新增或者修改
      save(){
        if(this.blog.id > 0) {
          // 避免后台json对象转换异常
          this.blog.tagNameList = [];
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

      // 回显标签列表
      getTagList(){
        this.$http.get("tag/findAll")
        .then(result => {
          this.tagList = result.body;
        });
      },

      // 修改 文章内容回显
      getArticle() {
        if(this.$route.params.id){
          this.$http.get("blog/findOne?id="+this.$route.params.id)
            .then(result => {
              this.blog = result.body;
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
