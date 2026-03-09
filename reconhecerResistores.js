function descobrirResist(){
    const tabelaDigito = {
        'preto' : '0',
        'marrom' : '1',
        'vermelho' : '2',
        'laranja' : '3',
        'amarelo' : '4',
        'verde' : '5',
        'azul' : '6',
        'violeta' : '7',
        'cinza' : '8',
        'branco' : '9'  
    };
    const tabelaMultiplo = {
        'preto' : 10 ** 0,
        'marrom' : 10 ** 1,
        'vermelho' : 10 ** 2,
        'laranja' : 10 ** 3,
        'amarelo' : 10 ** 4,
        'verde' : 10 ** 5,
        'azul' : 10 ** 6,
        'violeta' : 10 ** 7,
        'cinza' : 10 ** 8,
        'branco' : 10 ** 9,
        'ouro' : 10 ** -1,
        'prata' : 10 ** -2 
    };
    const tabelaTolerar = {
        'marrom' : 1,
        'vermelho' : 2,
        'ouro' : 5,
        'prata' : 10,
        'branco' : 20
    }
    //fazer uma tabela de tolerância
    let faixaNum = parseInt(prompt('Insira a uantidade de faixas(4 ou 5)'));
    let value = '';

    for(let i = 0; i < faixaNum; i++){
        let color = prompt('Insira a cor da ' + (i + 1) + 'ª faixa');
        color = color.toLowerCase();

        if(color == 'dourado'){
            color = 'ouro';
        }

        if(i == faixaNum - 1){
            alert('O resistor terá uma resistência de ' + value + ' Ohms com tolerância de ' + tabelaTolerar[color] + '%, que seriam, aproximadamente, ' + (value * (tabelaTolerar[color]/100)).toFixed(2) + ' Ohms a mais ou a menos');
        }else if(i == faixaNum - 2){
            value = Number(value) * tabelaMultiplo[color];
        }else{
            value += tabelaDigito[color];
        }
    }
}