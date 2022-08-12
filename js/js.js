
//animation counter number//
console.log("conetado");
let valueDisplay= document.querySelectorAll(".num");
let interval=4000;
console.log(valueDisplay);

valueDisplay.forEach((valueDisplay) =>{
    let inicioValor=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duracion= Math.floor(interval/endValue)
    
    
console.log(endValue)
valueDisplay.style.fontSize="30px";
    let tiempo =setInterval( function(){
      inicioValor +=1;
valueDisplay.textContent=inicioValor;
if (inicioValor==endValue) {
    clearInterval(tiempo);
}
    },duracion);

    
});


