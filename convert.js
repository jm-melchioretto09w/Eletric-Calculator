function conversorUni(){
    let prefix = ['G', 'M', 'K', '', 'm', 'u', 'n'];

    let uniB = prompt('Insira unidade plena');
    let value = Number(prompt('Insira valor'));

    let uni1 = prompt('Insira a unidade de ' + value);
    uni1 = uni1.replace(uniB, '');
    
    let uni2 = prompt('Insira a unidade para qual queres converter');
    uni2 = uni2.replace(uniB, '');

    let exp;
    let res;

    if(prefix.includes(uni1) && prefix.includes(uni2)){
        exp = prefix.indexOf(uni2) - prefix.indexOf(uni1);
        res = value * (Math.pow(10, (exp * 3)));
    }

    alert('o novo valor será ' + res + uni2 + uniB);
}