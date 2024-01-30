let img, img1, img2, img3, img4, img5, img6, img7, av1, av2, av3,av4,av5, av6
let fondos = [img, img1, img2, img3, img4, img5, img6, img7]
let avatares = [av1, av2, av3, av4, av5, av6]
let x = 0
    let y = 0
//let fondos2 = document.querySelectorAll('.imgs')
// let button
// let btn = document.getElementsByClassName('.imgs')
// let val = btn. value
// console.log(val)
// function miBoton(){
//   document.querySelectorAll(".imgs").onclick = function() {
//     alert("boton seleccionado")
  
//   }
// }
function setup() {
  
  createCanvas(windowWidth, windowHeight);//crear el tamaño del canvas 
 //cargar imagenes en variables
  img = loadImage('assets/IMG_3560.png')
  img1 = loadImage('assets/IMG_3564.png')
  img2 = loadImage('assets/IMG_3577.png')
  img3 = loadImage('assets/IMG_3581.png')
  img4 = loadImage('assets/IMG_3608.png')
  img5 = loadImage('assets/IMG_3610.png')
  img6 = loadImage('assets/IMG_3611.png')
  img7 = loadImage('assets/IMG_3618.png')
 av1 = loadImage('assets/jesus.png') 
av2 = loadImage('assets/telefono.png')
av3 = loadImage('assets/nido.png')
av4 = loadImage('assets/triciclo.png')
av5 = loadImage('assets/chanchan.png')
av6 = loadImage('assets/cajamarca.png')
  
//creando boton
//   for(let i = 0; i < fondos.length; i++){
// console.log(i)
//  let button = createButton()
//  console.log(button)
// button.innerHTML = '<img src="assets\camputador.png" />'
//button.style.background = "url(assets/IMG_3560.png"

//console.log("escogiste este fondo" + fondos2 )
  
background(220);
  image(img4, 0,0 ,windowWidth, windowHeight)
  let av = image(av1, x, y, 250,250)
 
  if (x > windowWidth){
    console.log('funciona')
    x = 0
  
    y = 250
    if(y == 250)
    av = image(av2, x, y+200, 250, 250)
  }

 
  

  
}

function draw() {
  background(220);
  image(img4, 0,0 ,windowWidth, windowHeight)
  let av = image(av1, x, y, 250,250)
 
  


    // image(img, x, y, 100, 90)
    //  image(img1, x, y+90, 100, 90)
    // image(img2, x, y + 180, 100, 90)
    // image(img3, x, y + 270, 100, 90)
    // image(img4, x,y + 360, 100, 90)
    // image(img5, x, y + 450, 100, 90)
    // image(img6, x,y + 540, 100, 90)
    // image(img7, x, y + 630, 100, 90)
if (x > windowWidth){
  console.log('funciona')
  x = 0

  y = 250
  if(y == 250)
  av = image(av2, x, y+200, 250, 250)
}
 
  
}


function keyTyped(){
  
    
  if (key === 'd') {
    console.log('funciona')
    x = x+20
    
  }

  if(key === 'a'){
  x = x-5

}

if(key === 's'){
  y = y-5
}

if(key === 'x'){
  y = y+5
}
}