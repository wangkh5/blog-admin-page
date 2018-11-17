import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'
import MessagesContainer from './components/MessagesContainer.vue'
import LinksContainer from './components/LinksContainer.vue'
import ArchivesContainer from './components/ArchivesContainer.vue'
import AboutContainer from './components/AboutContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/",component: HomeContainer},
    { path: "/home",component: HomeContainer},
    { path: "/messages",component: MessagesContainer},
    { path: "/links",component: LinksContainer},
    { path: "/archives",component:ArchivesContainer},
    { path: "/about",component: AboutContainer}
  ]
})

// 把路由对象暴露出去
export default router