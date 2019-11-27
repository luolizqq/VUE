import * as types from "../mutation-type";
const home={
    state:{
        number:11111
    },
    getters:{
        number:(state)=>state.number+1
    },
    mutations:{
        [types.SET_NUM](state,num){
            console.log("修改")
            state.num = num;
        }
    },
    actions:{}
}
export default home;