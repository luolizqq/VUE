<template>
  <div id="app">
   <transition :name="transitionName">
      <router-view class="Route"/>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:""
    }
  },
  watch:{
    $route(){
       if(this.$router.isleft){
          this.transitionName ="slideleft"
       }
       if(this.$router.isright){
          this.transitionName ="slideright"
       }
    }
  }
}
</script>

<style lang="less">
@import "~styles/reset.less";
.iconfont{
  color:#fff;
  font-size:20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  .Router {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all .5s ease;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
}
.slideleft-enter,
 .slideright-leave-active {
  opacity: 1;
  transform: translate3d(90% 0, 0);
  -webkit-transform: translate3d(90%, 0, 0);
  -moz-transform: translate3d(90%, 0, 0);
}
.slideleft-leave-active,
.slideright-enter {
 opacity: 1;
 transform: translate3d(-90% 0, 0);
 -webkit-transform: translate3d(-90%, 0, 0);
 -moz-transform: translate3d(-90%, 0, 0);
}
}
</style>
