class Vida {
  constructor(vidaMaxima, vidaInicial) {
    this.vidaMaxima = vidaMaxima;
    this.vidaInicial = vidaInicial;
    this.vidas = this.vidaInicial;
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for (let index = 0; index < this.vidas; index++) {
      const margem = index * 10;
      const posicao = this.xInicial * (1 + index);
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas < this.vidaMaxima) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }
}