const c = 30;
const G = 2;
const dt = 0.1;

let m87;

const particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m87 = new Blackhole((width/2)-500, height / 2, 10000);

  for (let y = -250; y < height/2; y += 20) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(255);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}