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
    this.invencivel = false;
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

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1050)
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    const colisao = collideRectRect(
      this.x + 15,
      this.y + 10,
      this.largura * 0.7,
      this.altura * 0.9,
      inimigo.x + 20,
      inimigo.y + 15,
      inimigo.largura * 0.8,
      inimigo.altura * 0.8
    );
    return colisao;
  }
}
