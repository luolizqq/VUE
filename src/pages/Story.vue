<!--  -->
<template>
<div class=''>
    书总共有基本{{totalPrice}}
    书总共有基本{{$store.getters.count}}
    书本个数{{count}}
    <button @click="ADD_BOOK({name:'水浒传',price:32})">添加</button>
    <button @click='DEL_BOOK({name:"水浒传"})'>减少</button>
    <transition>
        <div class="box" v-if="isShow"></div>
    </transition>
</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
components: {},
data(){
  return {
    isShow:true
  }
},
computed: {
    //对于模块化，只有state区分模块，getters,mutations,actions都是在store上
    ...mapState({
        'books':(state)=>{console.log("state",state);return state.story.books},
        'num':(state) =>state.story.num
    }),
    ...mapGetters([
        'totalPrice',
        'count'
    ])
},
watch: {},
methods: {
    ...mapMutations(['ADD_BOOK','DEL_BOOK',"add"]),
},
created() {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
.box{
  width:50px;
  height:50px;
  background:red;
}
</style>