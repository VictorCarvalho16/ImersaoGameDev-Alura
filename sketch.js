let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let inimigo;

let matrizInimigo = [];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 4; j++) {
    matrizInimigo.push([104 * j, 104 * i]);
  }  
}
let matrizPersonagem = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrizPersonagem.push([220 * j, 270 * i]);
  }  
}

function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -50, 52, 52, 104, 104);
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    personagem.pula();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    noLoop();
  }
}
