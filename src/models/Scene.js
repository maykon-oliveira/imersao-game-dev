class Scene {
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  display() {
    image(this.img, this.x1, 0, width, height);
    image(this.img, this.x2, 0, width, height);

    this.update();
  }

  update() {
    this.x1 -= this.speed;
    this.x2 -= this.speed;

    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x1 = width;
    }
  }
}
