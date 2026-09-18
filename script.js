let btn = document.querySelector("button");
let inp = document.querySelector("input");
let unli= document.querySelector("ul");
btn.addEventListener("click",function(){
    let lis= document.createElement("li");
    lis.innerText= inp.value;

    let delb = document.createElement("button");
    delb.innerText = "delete";
    delb.classList.add("delete")

    unli.appendChild(lis);
    lis.appendChild(delb);
    inp.value="";
})

unli.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log("delete");
    }
})

// let delbtns= document.querySelectorAll(".delete");
// for(kuch of delbtns) {
//     kuch.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }