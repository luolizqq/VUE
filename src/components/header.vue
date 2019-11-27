<!--  -->
<template>
<div class=''>
<div v-if="back" @click="backkk">《</div>
    {{title}}
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

</style>