function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(19);

  jogo = new Game();
  jogo.setup();
  telaInicial = new Home();
  cenas = {
    jogo,
    telaInicial,
  };
  botaoGerenciador = new Button("Iniciar", width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  jogo.draw();

  cenas[cenaAtual].draw();
}
