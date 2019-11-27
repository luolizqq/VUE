<!--  -->
<template>
  <div class="page">
    <tab-header :back="true" title="首页"></tab-header>
    <span @click="show=true">区域</span>
    <van-popup v-model="show">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
    <!-- home
      <div @click="toDetail">toDetail</div>
    {{number}}-->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
import * as homeApi from "api/homeApi.js";
import Vue from "vue";
import { Picker,Popup,Toast } from "vant";
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Toast);
// import tabHeader from "common/header.vue"
import tabHeader from "components/header.vue";
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Button.name, Button);
export default {
  components: {},
  data() {
    return {
      num: 10,
      active: "tab-container1",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      show:false
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    },
    ...mapGetters(["number"]),
    ...mapState({
      number: state => state.home.number
    })
  },
  watch: {},
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    ...mapMutations({
      setNum: "SET_NUM"
    }),
    toF() {
      //跳转到首页
      this.$router.push("/");
    },
    increase: function() {
      this.setNum(this.num);
    },
    toDetail() {
      this.$router.push("/home/detail");
    },
    queryOrgPowerName() {
      const params = {
        data: {
          inData: {
            userId: "863EE021295499A2E0500A0A15CB4BC4",
            moduleId: "863B6C68D47BE853E0500A0A15CB768F",
            orgId: "402834815ae9bea8015ae9c43ae90001"
          }
        }
      };
      homeApi.queryOrgPowerName(params).then(res => {
        console.log("res", res);
      });
    },
    login() {
      const params = {
        accountNo: "111",
        userPass:
          "uuX9d7rpu/gEJLNJL6P3roR3oRjHWB5B5PPwqcxzzq5oQMw118jeIis/7SGHh+Ic1fVcF/zcfpj++/2Bi0k4BA=="
      };
      homeApi.login(params).then(res => {
        console.log("res", res);
      });
    }
  },
  created() {},
  mounted() {
    this.login();
    this.queryOrgPowerName();
  },
  components: {
    tabHeader
  }
};
</script>
<style lang='less' scoped>
//javascript里的简写最前面不需要加~,style里简写前需要加~
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
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #f8f8f8;
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
      .tab-0,
      .tab-1,
      .tab-2,
      .tab-3 {
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


