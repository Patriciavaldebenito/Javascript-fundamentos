var d = document.getElementById("graphic");
var lienzo = d.getContext("2d");
    console.log("element: ",d);

var lineas = 60; // llamadas a la functión construyendo la gráfica
var l = 0; 

var yi,xf;
var color_= "#ffe900";


//iteración 
for(l=0;l<lineas;l++)
{
    xi= 10 * (l+1);
    yf= 10*l;
    printGraphic(color_,xi,0,600,yf);
}

printGraphic(color_,1,1,599,1);
printGraphic(color_,599,1,599,599);

//Construcción 
function printGraphic(color,xin,yin,xfi,yfi){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xin,yin);
    lienzo.lineTo(xfi,yfi);
    lienzo.stroke();
    lienzo.closePath();
}