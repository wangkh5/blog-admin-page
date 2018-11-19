import VueRouter from 'vue-router'

import ArticlesContainer from './components/ArticlesContainer.vue'
import CategoriesContainer from './components/CategoriesContainer.vue'
import TagsContainer from './components/TagsContainer.vue'
import AboutContainer from './components/AboutContainer.vue'
import EditorArticleContainer from './components/EditorArticleContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/",component: ArticlesContainer},
    { path: "/articles",component: ArticlesContainer},
    { path: "/categories",component: CategoriesContainer},
    { path: "/tags",component: TagsContainer},
    { path: "/about",component: AboutContainer},
    {path: "/articles/editorarticle", component: EditorArticleContainer}
  ]
})

// 把路由对象暴露出去
export default router