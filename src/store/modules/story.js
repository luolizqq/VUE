import * as types from "../mutation-type";
 export var story ={
    state:{
        books:[],
        num:1
    },
    getters:{
        totalPrice:(state)=>{
            return state.books.reduce((total,current)=>{
                return total+current.price
            },0)
        },
        count:(state) =>{
            return state.books.length;
        },
        
    },
    actions:{},
    mutations:{
        [types.ADD_BOOK](state,book){
            state.books = [...state.books,book]
        },
        [types.DEL_BOOK](state,book){
            state.books = state.books.filter((item)=>item.name !==book.name)
        },
        add(state){
            console.log("改变num")
            state.num=2
        }
    }
}
