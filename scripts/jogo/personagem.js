class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [];
    this.frameAtual = 0;
    this.personagemX = 0;
    this.personagemTamanho = [110, 135];
    this.personagemSpriteTamanho = [220, 270];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.matriz.push([220 * j, 270 * i]);
      }  
    }
    console.log(this.matriz);
  }

  exibe() {
    image(this.imagem,
      this.personagemX,
      height - this.personagemTamanho[1],
      this.personagemTamanho[0],
      this.personagemTamanho[1],
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.personagemSpriteTamanho[0],
      this.personagemSpriteTamanho[1]
    );
    this.anima();
  }

  anima() {
    this.frameAtual++;
    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
