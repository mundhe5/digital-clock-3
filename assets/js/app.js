var cl=console.log;


var clock2=document.getElementById("clock2");

function thirdclock(){

var d= new Date();
var h= d.getHours();
var s= d.getSeconds();
var m= d.getMinutes();

var session="am";

if(h > 12){
    session="pm";
    h=h -12;

}


h=conditionsforsmallerthan10(h);
m=conditionsforsmallerthan10(m);
s=conditionsforsmallerthan10(s);


function conditionsforsmallerthan10(c){
    if(c < 10){
         c= "0"+c;
        
    }
        return c;

}
// if(h < 10){
//     h ="0" + h;
// }
// if(m < 10){
//     m = "0" + m;
// }
// if(s < 10){
//     s= "0" + s;
// }


var result2=`${h}   : ${m} : ${s} ${session}`
cl(result2);
clock2.innerHTML=result2;

setTimeout(thirdclock,1000);


}


thirdclock();



