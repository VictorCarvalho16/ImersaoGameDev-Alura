let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;

let somDoJogo;
let somDoPulo;

let cenario;
let pontuacao;
let personagem;
const inimigos = [];


let matrizPersonagem = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrizPersonagem.push([220 * j, 270 * i]);
  }  
}
let matrizInimigo = [];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 4; j++) {
    matrizInimigo.push([104 * j, 104 * i]);
  }  
}
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemGameOver = loadImage('assets/imagens/assets/game-over.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();
  personagem = new Personagem(
    matrizPersonagem,
    imagemPersonagem,
    0,
    30,
    110,
    135,
    220,
    270
  );
  const inimigo = new Inimigo(
    matrizInimigo,
    imagemInimigo,
    width -50,
    30,
    52,
    52,
    104,
    104,
    10,
    100
  );
  const inimigoGrande = new Inimigo(
    matrizInimigoGrande,
    imagemInimigoGrande,
    width * 2,
    0,
    200,
    200,
    400,
    400,
    10,
    500
  );
  const inimigoVoador = new Inimigo(
    matrizInimigoVoador,
    imagemInimigoVoador,
    width - 50,
    200,
    100,
    75,
    200,
    150,
    10,
    100
  );

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

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

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2.5);
      noLoop();
    }
  })

  
}
