class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yBase = height - this.altura;
    this.y = this.yBase;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
  }

  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = -30;
      this.pulos++;
      somDoPulo.play();
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if (this.y > this.yBase) {
      this.y = this.yBase;
      this.pulos = 0;
    }
    
  }

  estaColidindo() {
    const precisao = .6888;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}
