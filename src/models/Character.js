class Character {
  constructor(img, spriteCollum, spriteRow) {
    this.img = img;
    this.spriteWidth = this.img.width / spriteCollum;
    this.spriteHeight = this.img.height / spriteRow;

    this.matriz = [];

    for (let y = 0; y < this.img.height; y += this.spriteHeight) {
      for (let x = 0; x < this.img.width; x += this.spriteWidth) {
        this.matriz.push([x, y]);
      }
    }

    this.spriteIndex = 0;
  }

  display() {
    image(
      this.img,
      0,
      height - 135,
      110,
      135,
      this.matriz[this.spriteIndex][0],
      this.matriz[this.spriteIndex][1],
      220,
      this.spriteHeight
    );

    this.update();
  }

  update() {
    this.spriteIndex++;
    if (this.matriz.length == this.spriteIndex) {
      this.spriteIndex = 0;
    }
  }
}
