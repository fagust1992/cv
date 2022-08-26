


let valueDisplay= document.querySelectorAll(".num");
let interval=4000;

function aniamcion() {
    valueDisplay.forEach((valueDisplay) =>{
        let inicioValor=0;
        let endValue=parseInt(valueDisplay.getAttribute("data-val"));
        let duracion= Math.floor(interval/endValue)
        
    valueDisplay.style.fontSize="30px";
        let tiempo =setInterval( function(){
          inicioValor +=1;
    valueDisplay.textContent=inicioValor;
    if (inicioValor==endValue) {
        clearInterval(tiempo);
    }
        },duracion);
    
        
    });  
}
const imagen1=document.getElementById("img1")
 const cargar_imagen= (entradas,obersvador)=>{
  entradas.forEach((entrada)=>{
  if (entrada.isIntersecting) {
    
    aniamcion();
  }

  });
 }
 const obersvador = new IntersectionObserver(cargar_imagen,{
    root:null,
    rootMargin: '0px 0px 0px 0px ',
    threshold:1.0


 });
 obersvador.observe(imagen1);



//script proyectos click imagen//
 document.addEventListener("click",function (e){
    console.log(e)
  if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
      document.querySelector(".capa-a");
        const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
        myModal.show();
  }
})