let oprands = (number)=>{
    document.querySelector("#inp").value +=number
}
let operator = (op)=>{
    document.querySelector("#inp").value +=op
}
let calculation = ()=>{
let result = eval(document.querySelector("#inp").value);
document.querySelector("#inp").value = result;
}
let clearAll = ()=>{
    document.querySelector("#inp").value = "";
}