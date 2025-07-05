var isStop = true;
var s = 0;
var min = 0;
let hr = 0;

start=()=>{
    
   if (isStop == true) {
    isStop = false;
    timer();
   }
}

timer=()=> {
if (isStop == false)
{
    s= parseInt(s);
    min = parseInt(min);    
    hr = parseInt(hr);
   s++;
 if (s == 60) 
  {
    s = 0;
    min++;
  }

  if (min == 60) 
    {
    min = 0;
    hr++;
    }

    if (s<10) {
        s = "0" + s;  
    }

    if (min<10) {
        min = "0" + min;
    }

    if (hr<10) {
        hr = "0" + hr;
    }   
    watcher.innerHTML = hr + " : " + min + " : " + s ;
    setTimeout("timer()", 1000);
}

}
stop=()=>
{
isStop = true;

}

reset =()=>{
isStop = true;
s = 0;
min = 0;
hr = 0; 

watcher.innerHTML = "00 : 00 : 00";
}