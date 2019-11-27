
import {fetch} from "..";
export function login(inData){
    const params = {data:{inData}}
    console.log("登录")
    return fetch('/service/ma/login',params)
}