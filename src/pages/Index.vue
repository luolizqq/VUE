<!--  -->
<template>
  <div class='page'>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <div class="nav-footer">
        <footer>
            <router-link v-for='(item,index) in navList' :to='item.path' :key ="index" :class='{"active": item.path ===activeRoute}'>
                <div :class="'tab-'+index"></div>
                <p v-text="item.name"></p>
            </router-link>
        </footer>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
import * as homeApi from "api/homeApi.js";
import { TabContainer, TabContainerItem } from "mint-ui";
import Vue from "vue"
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  components: {},
  data() {
    return {
      num: 10,
      active:'tab-container1',
      navList:[
          {
              path:'/home',
              name:"首页"
          },
           {
              path:'/story',
              name:"故事"
          },
           {
              path:'/footprints',
              name:"足迹"
          },
           {
              path:'/day',
              name:"推荐日"
          }
      ]
    };
  },
  computed: {
    activeRoute(){
        return this.$route.path
    },
    ...mapGetters(["number"]),
    ...mapState({
      number: state => state.home.number
    })
  },
  watch: {},
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),
    toF() {
      console.log("执行");
      //跳转到首页
      this.$router.push("/");
    },
    increase: function() {
      this.setNum(this.num);
    }
  },
  created() {},
  mounted() {
    const params = {
      accountNo: "111",
      userPass:
        "uuX9d7rpu/gEJLNJL6P3roR3oRjHWB5B5PPwqcxzzq5oQMw118jeIis/7SGHh+Ic1fVcF/zcfpj++/2Bi0k4BA=="
    };
    homeApi.login(params).then(res => {
      console.log("res", res);
    });
  }
};
</script>
<style lang='less' scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.nav-footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    .h(98);
    background: @tab-general-bg-color;
    display: block;
    footer {
      font-size: 0;
      border-top: 1px solid #E7E7E7;
      border-bottom: 1px solid #F8F8F8;
      .pt(10);
      line-height: 1.2;
      width: 100%;
      .h(98);
      display: flex;
      a {
        text-decoration: none;
        color: @base-font-color;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: block;
        .fs(22);
        .tab-0, .tab-1, .tab-2, .tab-3 {
          display: inline-block;
          .h(42);
          .w(42);
          background-size: cover;
        }
        .tab-0 {
          background-image: url("../assets/imgs/index-noselect.svg");
        }
        .tab-1 {
          background-image: url("../assets/imgs/note-noselect.svg");
        }
        .tab-2 {
          background-image: url("../assets/imgs/print-noselect.svg");
        }
        .tab-3 {
          background-image: url("../assets/imgs/dy-noselect.svg");
        }
        &:hover {
          text-decoration: none;
        }
        &.router-link-active.active {
          .tab-0 {
            background-image: url("../assets/imgs/index-select.svg");
          }
          .tab-1 {
            background-image: url("../assets/imgs/note-select.svg");
          }
          .tab-2 {
            background-image: url("../assets/imgs/print-select.svg");
          }
          .tab-3 {
            background-image: url("../assets/imgs/dy-select.svg");
          }
        }
      }
      p {
        margin: 0;
      }
    }
  }
</style>