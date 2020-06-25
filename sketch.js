function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  frameRate(40);
  somDoJogo.loop();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
