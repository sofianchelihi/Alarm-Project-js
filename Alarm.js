var al = document.querySelector("#al");
var al2 = document.querySelector("#pause");
var ip = document.querySelector(".inp_hr");
var ip2 = document.querySelector(".inp_min");
al.addEventListener("click",()=>{
     localStorage.setItem("time",ip.value);
     localStorage.setItem("time2",ip2.value); 
});

al2.addEventListener("click",()=>{
   localStorage.removeItem("time");
   localStorage.removeItem("time2"); 
});

setInterval(()=>{
    var dt = new Date();
    if (localStorage.getItem("time")==dt.getHours() && localStorage.getItem("time2")==dt.getMinutes()) 
    { 
           alert("its time");
           localStorage.removeItem("time");
           localStorage.removeItem("time2");
    } 
},1);


 

class Clock{
   constructor(){
      setInterval(this.play_clock,1);
   }

   play_clock(){
     var dat = new Date();
     var s = dat.getSeconds()*6;
     var m = dat.getMinutes()*6 + (s/360)*6;
     var h = dat.getHours()*30 + (m/360)*30;
     document.querySelector(".hours").style.transform="rotate("+h+"deg)";
     document.querySelector(".minits").style.transform="rotate("+m+"deg)";
     document.querySelector(".secands").style.transform="rotate("+s+"deg)";
   }

}
onload = new Clock();


       

