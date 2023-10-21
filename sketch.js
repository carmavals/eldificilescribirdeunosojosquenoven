let img, img1, img2, img3, img4, img5, img6, img7
let fondos = [img, img1, img2, img3, img4, img5, img6, img7]
let spaceY = 90  
function setup() {
  createCanvas(900, 900);
  img = loadImage('assets/IMG_3560.png')
  img1 = loadImage('assets/IMG_3564.png')
  img2 = loadImage('assets/IMG_3577.png')
  img3 = loadImage('assets/IMG_3581.png')
  img4 = loadImage('assets/IMG_3608.png')
  img5 = loadImage('assets/IMG_3610.png')
  img6 = loadImage('assets/IMG_3611.png')
  img7 = loadImage('assets/IMG_3618.png')
  
}
let x = 90
  let y = 80
  // y = y + 90
function draw() {
  background(220);
  


    image(img, x, y, 100, 90)
     image(img1, x, y+90, 100, 90)
    image(img2, x, y + 180, 100, 90)
    image(img3, x, y + 270, 100, 90)
    image(img4, x,y + 360, 100, 90)
    image(img5, x, y + 450, 100, 90)
    image(img6, x,y + 540, 100, 90)
    image(img7, x, y + 630, 100, 90)

 
  
}
