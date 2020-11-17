class Repeller {
  constructor(x, y) {
    this.power = 300;
    this.position = createVector(x, y);
  }

  display() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    ellipse(this.position.x, this.position.y, 50, 50);
    stroke(255);
    strokeWeight(2);
    fill(200);
    ellipse(this.position.x, this.position.y, 150, 150);
  }

  repel(p) {
    let dir = p5.Vector.sub(this.position, p.position); // Calculate direction of force
    let d = dir.mag(); // Distance between objects
    dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    d = constrain(d, 1, 50); // Keep distance within a reasonable range
    let force = -1 * this.power / (d * d); // Repelling force is inversely proportional to distance
    dir.mult(force); // Get force vector --> magnitude * direction
    return dir;
  }
}
