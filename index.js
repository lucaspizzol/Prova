var matriculas = [];

function adicionarAluno() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    
    if (matriculas.includes(matricula)) {
        alert("A matrícula " + matricula + " já foi inserida anteriormente.");
        return; 
    }

    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem estar entre 0 e 10.");
        return; 
    }

    
    matriculas.push(matricula);

    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";

    var tabela = document.getElementById("corpo-tabela");
    var novaLinha = tabela.insertRow(-1);
    var celulaNome = novaLinha.insertCell(0);
    var celulaMatricula = novaLinha.insertCell(1);
    var celulaNota1 = novaLinha.insertCell(2);
    var celulaNota2 = novaLinha.insertCell(3);
    var celulaMedia = novaLinha.insertCell(4);
    var celulaSituacao = novaLinha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSituacao.innerHTML = situacao;

    if (situacao === "Aprovado") {
        celulaSituacao.classList.add("aprovado");
    } else {
        celulaSituacao.classList.add("reprovado");
    }
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (!nome || !matricula || isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    return true;
}
