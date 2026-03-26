const olympicsdate = new Date("2028-07-14T00:00:00");

function countDown(){
const timer = document.getElementById("root");
const now = new Date();
const diff = olympicsdate - now ;  //difference in milliseconds

if (diff<=0){
    timer.innerHTML = "Olympics Started!";
    return;
}

//calculations 
const days = Math.floor((diff/(24*60*60*1000)));
const hours = Math.floor((diff/(60*60*1000)%24));
const minute = Math.floor((diff/(60*1000)%60));
const second = Math.floor((diff/1000)%60);

timer.innerHTML = `${days}d : ${hours}h : ${minute}m : ${second}s`;
}

setInterval(countDown,1000);

//styling 
const timer = document.getElementById("root");
timer.style.fontSize = "80px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.fontFamily = "monospace";
