function leiOhm(){
    let proc = prompt(`Insira a variável procurada:
        -U: para potência
        -R: para a resistência
        -I: para a corrente`);

    let u, r, i, res, uni;

    if(proc != 'U'){

        u = Number(prompt('Insira o valor de U'));

    }

    if(proc != 'R'){

        r = Number(prompt('Insira o valor de R'));

    }

    if(proc != 'I'){

        i = Number(prompt('Insira o valor de I'));

    }

    switch(proc){
        case 'U':

            res = r * i;
            uni = 'V'

            break;
        case 'R':

            res = u / i;
            uni = ' Ohm'

            break;
        case 'I':

            res = u / r;
            uni = 'A'

            break;
    }

    alert('A ' + proc + ' é de ' + res + uni);
}