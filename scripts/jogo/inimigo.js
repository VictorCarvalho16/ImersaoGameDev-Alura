class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    this.velocidade = 10;
  }

  move() {
    this.x -= this.velocidade;
    this.x = this.x < -this.largura ? this.x = width : this.x;
  }
}