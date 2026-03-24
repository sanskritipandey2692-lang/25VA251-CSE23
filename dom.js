// document.write("hello")

function result(){

    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;
//valid age for vote casting
    if(inputData>=18){
        alert("Valid Data");
    } else {
        alert("not valid")
    }

    let changeColor=document.getElementById('text');
    changeColor.style.color="red";

    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="blue";
}

let para=document.getElementById("paratext");
function changetextColor(){
    para.style.backgroundColor="#" +Math.floor(Math.random() * 167772)
}

para.addEventListener('mouseover',changetextColor);