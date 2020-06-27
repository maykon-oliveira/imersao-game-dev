class Score {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill("gold");
    textSize(50);
    text(parseInt(this.pontos), width - 15, 50);
    stroke("black");
  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.01;
  }
}
