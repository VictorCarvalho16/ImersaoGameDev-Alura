class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.chao = height - this.altura - 30;
    this.y = this.chao;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.pulos = 0;
    this.alturaDoPulo = 50;
  }

  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = - this.alturaDoPulo;
      this.pulos++;
      somDoPulo.play();
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if (this.y > this.chao) {
      this.y = this.chao;
      this.pulos = 0;
    }
    
  }

  estaColidindo(inimigo) {
    const precisao = .7;
    noFill();
    rect(
      this.x,
      this.y,
      this.largura,
      this.altura
    );
    rect(
      inimigo.x,
      inimigo.y,
      inimigo.largura,
      inimigo.altura
    );
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
