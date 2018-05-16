const P5 = p5;

// sketch starting point must be a function
const sketch = (p5) => {
  const p = p5;
  const height = 400;
  let angle = 0;
  let slider;

  function branch(len) {
    p.line(0, 0, 0, -len);
    p.translate(0, -len);

    if (len > 4) {
      p.push();
      p.rotate(angle);
      branch(len * 0.67);
      p.pop();

      p.push();
      p.rotate(-angle);
      branch(len * 0.67);
      p.pop();
    }
  }

  // runs once to set up the canvas
  p.setup = () => {
    p.createCanvas(height, height);
    slider = p.createSlider(0, Math.PI * 2, Math.PI / 4, 0.01);
  };

  // runs at every frame
  p.draw = () => {
    p.background(51);
    angle = slider.value();
    p.stroke(255);
    p.translate(200, height);
    branch(100);
  };
};

// runs the sketch
new P5(sketch);  // 2nd param can be a canvas html element
