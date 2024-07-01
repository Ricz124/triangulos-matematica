function Calcula() {
    var catetoOposto = document.getElementById("catetoOposto").value;
    var catetoAdjacente = document.getElementById("catetoAdjacente").value;

    var hipotenusa = Math.sqrt( Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));

    var inputHipotenusa = document.getElementById("hipotenusa");
    inputHipotenusa.value = hipotenusa;

}


function calcularAreaBase() {

    var b = parseFloat(document.getElementById('base_compr').value);
    var s = parseFloat(document.getElementById('alt_lad').value);

    var resultado = 2 * b * s + Math.pow(b, 2);

    var resultadoImp = document.getElementById('result');
    resultadoImp.value = resultado;
}

function verificarResposta(idQuestao, respostaCorreta) {
    var botoes = document.querySelectorAll('#' + idQuestao + ' button');
    var respostaContainer = document.getElementById('resposta_' + idQuestao);

    botoes.forEach(function(botao) {
        botao.disabled = true;
    });


    for (var i = 0; i < botoes.length; i++) {
        if (botoes[i].textContent.trim() === respostaCorreta) {
            if (botoes[i].classList.contains('correta')) {
                respostaContainer.style.color = 'green';
                respostaContainer.textContent = 'Resposta correta!';
            } else {
                botoes[i].classList.add('correta');
                respostaContainer.style.color = 'green';
                respostaContainer.textContent = 'Resposta correta!';
            }
        } else {
            botoes[i].classList.add('errada');
        }
    }
}
