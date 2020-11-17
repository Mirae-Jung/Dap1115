class Particle { //Particle 클래스 설
  constructor(position) { //postion이라는 x 벡터값 설정
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
  }
  //acceleration y값에 0.05
  //velocity 랜덤값 적용
  //postion = postion에 copy값 적용한 것
  //lifespan(수명)라는 변수는 숫자 255

  run() {
    this.update();
    this.display();
  } //run은 update와 display를 실행시

  // Method to update position
  update() {
    this.velocity.add(this.acceleration); //속도에 가속을 더함
    this.position.add(this.velocity); //위치에 속도값을 더함
    this.lifespan -= 2; //lifespan은 -2씩 감소
  }

  // Method to display
  display() {
    stroke(255, this.lifespan); //윤곽선 색깔 255, 투명값은 lifespan에ㅎㅎ 의해 조절
    strokeWeight(2); //윤곽선 두께
    fill(127, this.lifespan); //원 색깔 적용, 투명값이 lifespan에 의해 조절
    ellipse(this.position.x, this.position.y, 12, 12);
  } //원의 중심값은 position의 x,y값에 의해 적용, 반지름 12

  // Is the particle still useful?
  isDead() { //isDead라는 함수 설정
    if (this.lifespan < 0.0) { //lifespan 값이 0보다 작을때, 즉 투명값이 0이하 일때
      return true; //true 값을 변환
    } else { //0.0보다 같거나 크면
      return false; // false를 변환
    }
  }
}
