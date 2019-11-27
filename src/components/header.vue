<!--  -->
<template>
<div class='header'>
<div v-if="back" ></div>
    <span @click="backkk"  class="iconfont icon-fanhui1 iconfanhui"></span>
    <div class="title">{{title}}</div>
    <span class="iconfont icon-zhankai iconzhankai"></span>
</div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
props:{
    title:{
        type:String,
        default:"标题"
    },
    back:{
        type:Boolean,
        default:false
    }
},
computed: {},
watch: {},
methods: {
backkk(){
    console.log("router",this.$router)
    this.$router.goBack()
}
},
created() {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
@import "~styles/mixzqq.less";
// @import "~styles/mixin.less";
.header{
    // .h(100);
    height:100px;
    background:red;
    text-align: center;
    position: relative;
    .iconfanhui{
        position: absolute;
        // .lh(100);
        line-height:100px;
        .left(20);
    }
    .title{
        // .lh(100);

        line-height:100px;
        color:#fff;
        .fs(38)
    }
    .iconzhankai{
        position: absolute;
        .right(20);
        // .lh(100);
        line-height:100px;
        .top(0)
    }
}

</style>