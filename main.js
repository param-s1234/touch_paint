canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="blue";
width_of_line=1;
var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last postion of x and y cordinats =");
        console.log("x ="+ last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current postion of x and y cordinats =");
        console.log("x ="+ current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
var width = screen.width;
var new_width = screen.width - 20;
var new_height = screen.height - 100;
if (width < 922)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_tochstart);
function my_tochstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove")
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last postion of x and y cordinats =");
    console.log("x ="+ last_position_of_x + "y =" + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current postion of x and y cordinats =");
    console.log("x ="+ current_position_of_touch_x + "y =" + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}
