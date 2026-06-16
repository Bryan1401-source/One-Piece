let numeroAtual = 5;

function gerarTabuada() {
    const grade = document.getElementById('grade-resultado');
    grade.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        let resultado = numeroAtual + i;

        const linha = document.createElement('div');
        linha.className = 'linha-tabuada';
        linha.innerHTML = `
            <span>${numeroAtual} + ${i}</span>
            <span>= ${resultado}</span>
        `;
        
        grade.appendChild(linha);
    }
}

function alterarNumero(valor) {
    numeroAtual += valor;
    if (numeroAtual < 1) numeroAtual = 1;
    document.getElementById('num-display').innerText = numeroAtual;
    gerarTabuada();
}

function irParaMultiplicacao() {
    window.location.href = "pagina_3.html";
}

window.onload = gerarTabuada;
