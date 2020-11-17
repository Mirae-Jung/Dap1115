class ParticleSystem {
  constructor(num, position) { //constructor에 num,position 설정
                              //이게 벡터값이였나?
    this.origin = position.copy();
    //ParticleSystem이라는 클래스 내부에 origin이라는 변수 설정하고
    //그 변수는 postion에 copy라는 함수를 적용한 값
    this.particles = [];
    //ParticleSystem 클래스 내부에 particles라는 변수를 설정하고 그 변수는 배열
    //한가지 의문점은 그냥 [] 이렇게만 표시했는데, 숫자가 0~무한대까지라는 의미인가??
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin));
    } //0부터 num이 될때까지 배열내의 뒷 순서로 이동하면서 particle에 push 함수 적용
     //근데 particles.push는 Particle이라는 클래스 내부의 this.origin 값 임
     //결국 저 범위 안에서 addParticle함수를 적용시켜라는 말과 같은 의미인듯
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  } //addParticle 함수 설정
   //addParticle은 함수 내부 자체에 particles라는 변수에 push를 적용하라는 명령
   //근데 particles.push는 Particle이라는 클래스 내부의 origin값이라는 뜻같다

  run() { //-> run 함수 설정
    // Run every particle
    // ES6 for..of loop
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    // https://www.youtube.com/watch?v=Y8sMnRQYr3c
    for (let particle of this.particles) {
      particle.run();
    } //->particle의 배열 전체 반복할 동안 particle에 run함수 실행

    // Filter removes any elements of the array that do not pass the test
    // I am also using ES6 arrow snytax
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // https://www.youtube.com/watch?v=mrYMzpbFz18
    this.particles = this.particles.filter(particle => !particle.isDead());
    //->run함수에서 particles는 particles에서 filter함수를 적용시킨것

    // Without ES6 arrow code would look like:
    // this.particles = this.particles.filter(function(particle) {
    //   return !particle.isDead();
    // });

  }
}
