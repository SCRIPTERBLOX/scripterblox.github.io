let sketch1 = function(p) {
  let counter;

  p.setup = function() {
    p.createCanvas(p.windowWidth, 170).parent('wave');
    counter = -p.windowWidth;
  };

  p.draw = function() {
    counter += 1;
    if (counter >= -50) { counter = -p.windowWidth; }

    p.clear();
    p.noStroke();

    p.fill(0, 0, 0);
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      let rgb = y / 2;
      p.fill(rgb, rgb, rgb);
      p.circle(i + counter, y + 10, 75);
      p.vertex(i + counter, y + 75 / 2 + 10);
    }
    p.vertex(p.windowWidth, 300);
    p.vertex(0, 300);
    p.fill(27);
    p.endShape();

    // Draw the top outline
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y - 75 / 2 + 10);
    }
    for (let i = p.windowWidth * 2; i > 0; i--) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y - 85 / 2 + 10);
    }
    p.fill(0, 0, 0);
    p.endShape();

    // Draw the bottom outline
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y + 75 / 2 + 5);
    }
    for (let i = p.windowWidth * 2; i > 0; i--) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y + 85 / 2 + 5);
    }
    p.fill(0, 0, 0);
    p.endShape();
  };
};

let sketch2 = function(p) {
  let counter;

  p.setup = function() {
    p.createCanvas(p.windowWidth, 170).parent('wave2');
    counter = -p.windowWidth;
  };

  p.draw = function() {
    counter += 1;
    if (counter >= -50) { counter = -p.windowWidth; }

    p.clear();
    p.noStroke();

    p.fill(0, 0, 0);
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      let rgb = y / 2;
      p.fill(rgb, rgb, rgb);
      p.circle(i + counter, y + 10, 75);
      p.vertex(i + counter, y + 75 / 2 + 10);
    }
    p.vertex(p.windowWidth, 300);
    p.vertex(0, 300);
    p.fill(27);
    p.endShape();

    // Draw the top outline
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y - 75 / 2 + 10);
    }
    for (let i = p.windowWidth * 2; i > 0; i--) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y - 85 / 2 + 10);
    }
    p.fill(0, 0, 0);
    p.endShape();

    // Draw the bottom outline
    p.beginShape();
    for (let i = 0; i < p.windowWidth * 2; i++) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y + 75 / 2 + 5);
    }
    for (let i = p.windowWidth * 2; i > 0; i--) {
      let y = p.sin(i * 0.005) * 40 + 75;
      p.vertex(i + counter, y + 85 / 2 + 5);
    }
    p.fill(0, 0, 0);
    p.endShape();
  };
};

// Create two separate p5 instances for each canvas
new p5(sketch1);
new p5(sketch2);