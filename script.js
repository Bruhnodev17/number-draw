function sortGenerator() {
    var minValueInput = document.querySelector('.input-min');
    var maxValueInput = document.querySelector('.input-max');
    if (!minValueInput || !maxValueInput) {
        console.error('Elemento de entrada não encontrado.');
        return;
    }
    var minValue = +minValueInput.value;
    var maxValue = +maxValueInput.value;
    if (minValue >= maxValue) {
        alert('O NÚMERO INICIAL NÃO PODE SER MENOR OU IGUAL AO DIGITADO POSTERIORMENTE!');
    }
    else {
        var result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        alert("O N\u00DAMERO SORTEADO FOI ".concat(result, "!"));
    }
}
