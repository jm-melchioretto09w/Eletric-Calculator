function descobrirResist(){
    const tabelaDigito = {
        'Preto' : 0,
        'Marrom' : 1,
        'Vermleho' : 2,
        'Laranja' : 3,
        'Amarelo' : 4,
        'Verde' : 5,
        'Azul' : 6,
        'Violeta' : 7,
        'Cinza' : 8,
        'Branco' : 9  
    };
    //fazer uma tabela para o multiplicador
    //fazer uma tabela de tolerância
    let faixaNum = parseInt('Insira a uantidade de faixas(4 ou 5)');
    let value = '';

    for(let i = 0; i < faixaNum; i++){
        let color = prompt('Insira a cor da ' + (i + 1) + 'ª faixa');
       console.log(tabelaDigito[color]);
    }
}