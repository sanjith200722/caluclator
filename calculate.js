let screen=document.querySelector("#screen");
let buttons=document.querySelectorAll(".button");
let val="";
screen.innerHTML=0;
//Button events and functions
buttons.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        let btnval=buttons[i].innerHTML;
        //Handling the error
        try{
            //Result 
        if(btnval=="="){
            val=eval(val).toString();
            screen.innerHTML=val;
            //Backspace
        }else if(btnval=="x"){
            val=val.slice(0, -1);
            screen.innerHTML=val||0;
            //Clear
        }else if(btnval=="c"){
            val="";
            screen.innerHTML=0;
            //Percentage
        }else if(btnval=="%"){
            val=((val/100)).toString();
            screen.innerHTML=val;
            //Square root
        }else if(btnval=="<sub>\\</sub>/<sup>--</sup>"){
            val=Math.sqrt(val).toString();
            screen.innerHTML=val;
            //Store value & print
        }else {
         val+=btnval;
         screen.innerHTML=val;
        }
    }
    //Print the error
    catch{
        screen.innerHTML="ERROR";
    }
    });
});