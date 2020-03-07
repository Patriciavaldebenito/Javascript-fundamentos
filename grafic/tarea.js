var d = document.getElementById("graphic");
var lienzo = d.getContext("2d");
    console.log("g: ",d);
   //  é, á, í, ó, ú
var lineas = 60; //30 llamadas a la functión construyendo la gráfica
var l = 0; 

var yi,xf;
var color_= "#ffe900";




//iteración 

for(l=0;l<lineas;l++)
{
    yi= 10*l;
    xf= 10 * (l+1);

    printGraphic(color_,0,yi,xf,600);
}

printGraphic(color_,1,1,1,599);
printGraphic(color_,1,599,599,599);

//Construcción 
function printGraphic(color,xin,yin,xfi,yfi){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xin,yin);
    lienzo.lineTo(xfi,yfi);
    lienzo.stroke();
    lienzo.closePath();
}