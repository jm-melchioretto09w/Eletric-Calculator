function resistEq(){

    let tipo = prompt('Insira tipo de associação (S: série|P: paralelo)');
    let qtd = parseInt(prompt('Insira a quantidade de resistores associados'));
    let res = [];

    for(let i = 0; i < qtd; i++){

        res[i] = Number(prompt('Insira a resistência do ' + (1 + i) + 'º resistor'));

    }

    let ans = 0;

    if(tipo == 'S'){

        for(let j = 0; j < qtd; j++){

            ans += res[j];

        }

    }else if(tipo == 'P'){

        for(let j = 0; j < qtd; j++){

            ans += 1 / res[j];

        }

        ans = 1 / ans;

    }else{

        alert('Opção inválida, repita o processo!');

    }

    alert('A associação indicada gera ' + ans + ' Ohms de resistência');

}