import home from "./modules/home";
import {story} from "./modules/story";
import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
const debug = true;
// export default new Vuex.Store({
//     modules:{home},
//     plugins:debug ? [createLogger()]:[]
// })
export default  new Vuex.Store({
    modules:{home,story},
    plugins:[createLogger()]
})