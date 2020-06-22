let sceneImg;
let characterImg;
let gameSound;

let scene;
let character;

function preload() {
  characterImg = loadImage("imagens/personagem/correndo.png");
  sceneImg = loadImage("imagens/cenario/floresta.png");
  gameSound = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(sceneImg, 3);
  character = new Character(characterImg, 4, 4);
  gameSound.loop();
  frameRate(40);
}

function draw() {
  scene.display();
  character.display();
}
