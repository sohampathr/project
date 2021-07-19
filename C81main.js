var mouseevent="empty";
var lastpositionofX,lastpostionofY;



canvas=document.getElementById("Mycanvas");
ctx=canvas.getcontext("2d");

color="black";
LineWidth=1;





canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    LineWidth=document.getElementById("linewidth").value;
    mouseevent="mousedown"; 
}
canvas.addEventListener("mousemove".my_mousemove);

function my_mousemove(e){
    currentpositionofmouseX=e.clientX-canvas.offsetLeft;
    currentpositionofmouseY=e.clientY-canvas.offsetTop;

    if(mouseevent="mousedown"){
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.LineWidth=LineWidth;
console.log("last position of X and Y ");
console.log("X="+lastpositionofX+"Y="+lastpositionofY);
ctx.moveTo(lastpositionofX,lastpostionofY);

console.log("current position of X and Y ");
console.log("X="+currentpositionofmouseX+"Y="+currentpositionofmouseY);
ctx.lineT(currentpositionofmouseX,currentpositionofmouseY);
ctx.stroke();


    }
}
lastpositionofX=currentpositionofmouseX;
lastpostionofY=currentpositionofmouseY;

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseevent="mouseup";


}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseevent="mouseleave";
    
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



