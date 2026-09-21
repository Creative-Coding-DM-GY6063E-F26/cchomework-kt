function setup() {
  createCanvas(400, 400);

}

function draw() {
  background('#DAC7AF');


  // Start drawing the white rings.
  fill(255)
  stroke('black');
  strokeWeight(0.05);
  line(50, 100, 
       185, 50);
  line(70, 110, 
       216, 55);
  fill('white')
  quad(50, 100, 
      185, 50, 
      216, 55,
      70, 110, 
      );
  quad(238, 64, 
    258, 66, 
    382, 0,
    355, 0, 
      );
  
  
  stroke(0,0,0,0)

  //Pink quadrilateral
  fill('pink')
  quad(223, 218, 
      378, 245, 
      378, 298, 
      222, 275);
  //Orange quadrilateral
  fill(230, 106, 55,230)
  quad(170, 138, 
      255, 20, 
      345, 150, 
      265, 270);
  


}
