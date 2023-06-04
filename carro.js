//Movimento do carro. Observe que de início, colocam-se os valores numéricos de x e y dentro da função. Depois, gera-se a variável xCarro com o valor numérico, e a variável yCarro com o valor numérico.
//Na aula 4, gerou-se a function voltaposiçãoinicial(), com parametros de fim de percurso com -30, grantindo-se a passagrm do carro pela pista inteira.
//Na função voltaposiçãoinicial foi atribuido o valor de retorno displayWidth. Portanto ajustando para o tamanho de tela.

//Carro 1.

let xCarro = 500;
let yCarro = 40;
let velocidadeCarro = 3.4;

//Carro 2.

let xCarro2 = 540;
let yCarro2 = 95;
let velocidadeCarro2 = 3.2;

//Carro 3.

let xCarro3 = 505;
let yCarro3 = 150;
let velocidadeCarro3 = 2.9;

function mostraCarro(){
  image(imagemDoCarro, xCarro, yCarro, 50, 40);
  image(imagemDoCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemDoCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaPosiçãoInicial(){
  if (xCarro < -50){
    xCarro = displayWidth;
  }
  if (xCarro2 < -50){
    xCarro2 = displayWidth;
  }
  if (xCarro3 < -50){
    xCarro3 = displayWidth;
  }
}