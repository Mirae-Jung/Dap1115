let systems = []; //systems 배열 변서 설정

function setup() {
  let text = createP("click to add particle systems");
  //text라는 변수를 지정해 "click to add particle systems"라는 텍스트 추출시키
  text.position(10, 365);
  //text라는 변수에 postion이라는 함수를 적

  createCanvas(640, 360); //배경 캔버스 크기 설
}

function draw() {
  background(51);
  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
  } //systems라는 배열 안의 변수들에 0번부터 마지막 번호가 될때까지 하나씩 뒤로 가면서
  //addParticle, run이라는 함수를 적용
}

function mousePressed() {
  systems.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
}//마우스를 누를때마다 system변수에 push 함수 적용
