let screen=document.querySelector("#screen");
let buttons=document.querySelectorAll(".button");
let val="";
screen.innerHTML=0;
buttons.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        let btnval=buttons[i].innerHTML;
        try{
        if(btnval=="="){
            val=eval(val).toString();
            screen.innerHTML=val;;
        }else if(btnval=="x"){
            val=val.slice(0, -1);
            screen.innerHTML=val||0;
        }else if(btnval=="c"){
            val="";
            screen.innerHTML=0;
        }else if(btnval=="%"){
            val=((val/100)).toString();
            screen.innerHTML=val;
        }else if(btnval=="<sub>\\</sub>/<sup>--</sup>"){
            val=Math.sqrt(val).toString();
            screen.innerHTML=val;
        }else {
         val+=btnval;
         screen.innerHTML=val;
        }
    }
    catch{
        screen.innerHTML="ERROR";
    }
    });
});