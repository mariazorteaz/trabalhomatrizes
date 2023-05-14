
// Cria as duas matrizes vazias
var matriz1 = new Array();
var matriz2 = new Array();

// Preenche a matriz 1 com os valores digitados pelo usuário
for (var i = 0; i < 3; i++) {
  var matriztemp = new Array(3);

  for (var j = 0; j < 3; j++) {
    matriztemp[j] = parseFloat(prompt("Digite o número " + ([i, j]) + " da primeira matriz:"));
  }
  matriz1.push(matriztemp);
}
console.log(matriz1);
document.write("<h2>" + "Matriz 1:  " + "<br>");
for (i = 0; i < matriz1.length; i++) {

  for (j = 0; j < matriz1[i].length; j++) {
    document.write( matriz1[i][j] + "" + " ");
  }
  document.write("<br>");

}
document.write("<br>"+ "</h2>" + "<br><br>");
// Preenche a matriz 2 com os valores digitados pelo usuário
for (var i = 0; i < 3; i++) {
  var matriztemp1 = new Array(3);

  for (var j = 0; j < 3; j++) {
    matriztemp1[j] = parseFloat(prompt("Digite o número " + ([i, j]) + " da segunda matriz:"));
  }
  matriz2.push(matriztemp1);
}
console.log(matriz2);
document.write("<h2>" + "Matriz 2 : " + "<br>");
for (i = 0; i < matriz2.length; i++) {

  for (j = 0; j < matriz2[i].length; j++) {
    document.write(matriz2[i][j] + " ");
  }
  document.write("<br>");

}
document.write("<br>"+ "</h2>" + "<br><br>");
// Função para calcular a matriz1 transposta
function transposta1(matriz1) {
  var transposta = [];
  for (i = 0; i < 3; i++) {
    transposta[i] = [];
    for (j = 0; j < 3; j++) {
      transposta[i][j] = matriz1[j][i];
    }
  }

  return transposta;
}

var matriz1Transposta = transposta1(matriz1);

document.write("<h2>" + "Matriz 1 transposta: " + "<br>" )
for (i = 0; i < matriz1Transposta.length; i++) {
  for (j = 0; j < matriz1Transposta[i].length; j++) {
    document.write(matriz1Transposta[i][j] + " ");
  }
  document.write("<br>");
}
document.write("<br>"+ "</h2>" + "<br><br>");

//Função para calcular amatriz2 transposta 
function transposta2(matriz2) {
  var transposta2 = [];
  for (i = 0; i < 3; i++) {
    transposta2[i] = [];
    for (j = 0; j < 3; j++) {
      transposta2[i][j] = matriz2[j][i];
    }
  }

  return transposta2;
}

var matriz2Transposta = transposta2(matriz2);

document.write("<h2>" + "Matriz 2 transposta: " + "<br>")
for (i = 0; i < matriz2Transposta.length; i++) {
  for (j = 0; j < matriz2Transposta[i].length; j++) {
    document.write(matriz2Transposta[i][j] + " ");
  }
  document.write("<br>");
}
document.write("<br>"+ "</h2>" + "<br><br>");

//soma matrizes 
function soma(matriz1, matriz2) {
  var soma = [];
  for (i = 0; i < 3; i++) {
    soma[i] = [];
    for (j = 0; j < 3; j++) {
      soma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }
  return soma


}
var somamatrizes = soma(matriz1, matriz2);
document.write("<h2>" + "Soma das Matrizes: " + "<br>")
for (i = 0; i < somamatrizes.length; i++) {
  for (j = 0; j < somamatrizes[i].length; j++) {
    document.write(somamatrizes[i][j] + " ");
  }
  document.write("<br>");
}
document.write("<br>"+ "</h2>" + "<br><br>");

//subtração matrizes
function subtracao(matriz1, matriz2) {
  var subtracao = [];
  for (i = 0; i < 3; i++) {
    subtracao[i] = [];
    for (j = 0; j < 3; j++) {
      subtracao[i][j] = matriz1[i][j] - matriz2[i][j];
    }
  }
  return subtracao


}
var subtracaomatrizes = subtracao(matriz1, matriz2);
document.write("<h2>" + "Subtração das Matrizes: " + "<br>")
for (i = 0; i < subtracaomatrizes.length; i++) {
  for (j = 0; j < subtracaomatrizes[i].length; j++) {
    document.write(subtracaomatrizes[i][j] + " ");
  }
  document.write("<br>" );
}
document.write("<br>" + "</h2>" + "<br><br>");

//Multiplicação de matrizes
function Multiplicação(matriz1, matriz2) {
  var multi = [];
   var aux = 0;
  for (var i = 0; i < 3; i++) {
    multi[i] = [];
    for (var j = 0; j < 3; j++) {
     
      for (var k = 0; k < 3; k++) {
        aux = (matriz1[i][k] * matriz2[k][j]) + (matriz1[i][k] + matriz2[k][j]);
        
        multi[i][j] = aux;
    }
  }
  return multi;
}

var multiplicacao = Multiplicação(matriz1, matriz2);
document.write("<h2>" + "Multiplicação das Matrizes : <br>");
for (var i = 0; i < multiplicacao.length; i++) {
  for (var j = 0; j < multiplicacao[i].length; j++) {
    document.write(multiplicacao[i][j] + " ");
  }
  document.write("<br>");
}

document.write("</h2>")
}
