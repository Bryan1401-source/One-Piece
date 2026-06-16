const numeroInput = document.getElementById('numeroInput');
const botaoGerar = document.getElementById('GerarTabuada');
const resultadoDiv = document.getElementById('resultadoTabuada');

botaoGerar.addEventListener('click', () => {

    const numero = parseInt(numeroInput.value);


    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, digite um número válido.</p>';
        return;
    }


    resultadoDiv.innerHTML = '';

    const titulo = document.createElement('h3');
    titulo.textContent = `Tabuada de Subtração do ${numero}:`;
    resultadoDiv.appendChild(titulo);

    for (let i = 1; i <= 10; i++) {
 
        const minuendo = i;
        const resultado = numero - minuendo;
        
    
        const linha = document.createElement('p');
        linha.textContent = `${numero} - ${minuendo} = ${resultado}`;
        
    
        resultadoDiv.appendChild(linha);
    }
});