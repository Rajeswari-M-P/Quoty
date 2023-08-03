const textarea=document.getElementById("textarea");

function f1(e){
    let value=e.value;
    textarea.style.fontsize=value+"px";

}
function f2(e){
    if(textarea.style.fontweight =="bold")
    {
        textarea.style.fontweight ="normal";
        e.classList.remove("active"); 
    }
    else{
        textarea.style.fontweight ="bold";
        e.classList.add("active"); 
    }
}


function f3(e){
    if(textarea.style.fontstyle =="italic")
    {
        textarea.style.fontstyle ="normal";
        e.classList.remove("active"); 
    }
    else{
        textarea.style.fontstyle ="italic";
        e.classList.add("active"); 
    }
}
function f4(e){
    if(textarea.style.textDecoration =="underline")

    {
        textarea.style.textDecoration ="none";
        e.classList.remove("active");
    }
    else{
        textarea.style.textDecoration ="underline";
        e.classList.remove("active");
    }
}

function f5(e){
    textarea.style.textAlign="left";
}

function f6(e){
    textarea.style.textAlign="center";
}

function f7(e){
    textarea.style.textAlign="right";
}
function f8(e){
   if( textarea.style.textTransform =="uppercase")
   {
    textarea.style.textDecoration ="none";
    e.classList.remove("active"); 
   }
   else{
    textarea.style.textDecoration ="uppercase";
    e.classList.add("active"); 
   }
}

function f9(){

    textarea.style.fontweight ="bold";
    textarea.style.textAlign="left";
    textarea.style.fontStyle="normal";
    textarea.style.textTransform="capitalize";
    textarea.value="";

}
function f10(e){
let value=e.value;
textarea.style.color=value;
}
window.addEventListener("load",window,),()=>{

    textarea.value="";
}
