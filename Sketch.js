function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    if (mouseIsPressed) {
      drawHeart(mouseX, mouseY, 30); // desenha o coração com tamanho 30
    }
  }
  
  function drawHeart(x, y, size) {
    fill("red");
    stroke("blue");
  
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }