//Passo a passo
//Na aula 04 será programada a repetição do movimento dos carrinhos.
//Na função setup, ao creatCanvas foi atribuido o dimensionamento horizontal como ajustável à tela do equipamento por meio do valor displayWidth.

function setup() {
  createCanvas(8*displayWidth/10, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicial();
  
}
