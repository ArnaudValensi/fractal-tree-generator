const P5 = p5;

// sketch starting point must be a function
const sketch = (p5) => {
  const p = p5;

  // runs once to set up the canvas
  p.setup = () => {
    p.createCanvas(800, 600);
  };

  // runs at every frame
  p.draw = () => {
  };
};

// runs the sketch
new P5(sketch);  // 2nd param can be a canvas html element
