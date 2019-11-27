import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:(resolve) => require(['@/pages/Index'],resolve),
      redirect:"/home",
      children:[
        {
          path:"/home",
          name:"home",
          //想要home这个页面也有多个路由，2点，1是在路由中配置children 2是在home页面的html结构中添加router-view
          //最后根据浏览器中的路径匹配应该显示的页面。
          children:[{
            path:"home1",
            name:"home1",
            component:(resolve) =>require(['@/pages/Home1'],resolve)
          }],
          component:(resolve) => require(["@/pages/Home"],resolve)
        },
        {
          path:"/story",
          name:"story",
          component:(resolve) => require(["@/pages/Story"],resolve)
        },
      ]
    },{
      path:"/home/detail",
      name:"detail",
      component:(resolve) =>require(["@/pages/Detail"],resolve)
    }
  ]
})
