class Game {
  constructor() {
    this.indice = 0;

    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Scene(imagemCenario, 3);
    vida = new Life(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial
    );
    pontuacao = new Score();
    personagem = new Character(
      matrizPersonagem,
      imagemPersonagem,
      30,
      0,
      120,
      194.5,
      180,
      254.5
    );
    const inimigo = new Enemy(
      matrizInimigo,
      imagemInimigo,
      width - 52,
      50,
      52,
      52,
      104,
      118,
      14
    );
    const inimigoGrande = new Enemy(
      matrizInimigoGrande,
      imagemInimigoGrande,
      width,
      0,
      200,
      200,
      400,
      400,
      12
    );
    const inimigoVoador = new Enemy(
      matrizInimigoVoador,
      imagemInimigoVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10
    );

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();

      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2 - 100);
        noLoop();
        somDoJogo.stop();
      }
    }
  }
}
