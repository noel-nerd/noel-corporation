import contacts from './contacts.json' assert { "type": "json" };

var contadorCliques = 0;

function cliqueAqui() {
  contadorCliques++
  const meuParagrafo = document.getElementById("meuParagrafo");
  meuParagrafo.innerHTML = `Vc clicou ${contadorCliques} vezes`;
}

function criarTabela() {
  var tabela = document.getElementById("tabela");
  var cabecalho = Object.keys(contacts[0]);

  var linhaCabecalho = tabela.insertRow(-1);
  cabecalho.forEach(function (campo) {
    var th = document.createElement("th");
    th.textContent = campo;
    linhaCabecalho.appendChild(th);
  });

  contacts.forEach(function (objeto) {
    var linha = tabela.insertRow(-1);
    cabecalho.forEach(function (campo) {
      var cell = linha.insertCell();
      cell.textContent = objeto[campo];
    });
  });
}

criarTabela()
document.getElementById("cliqueAqui").onclick = cliqueAqui
