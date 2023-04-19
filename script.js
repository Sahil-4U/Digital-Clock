const hourEl=document.getElementById("hour");
const minEl=document.getElementById("minutes");
const secEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock(){
    //calculate hours,minutes,seconds here:-
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    //checking for am or pm here:-
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    //updating hour,min,sec if they are smaller then 10 then i am adding 0 before them:-
    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;

    //Here is the main touch of js(updating the html elements here):-
    hourEl.innerText=h;
    minEl.innerText=m;
    secEl.innerText=s;
    ampmEl.innerText=ampm;

    //settimeout method for calling updateClock() function at every second:-
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock()