function principal(){
    let name = prompt('Insira nome do item'), wkw = prompt('A potência será medida em W ou kW?(insira a unidade)'), power = Number(prompt('Insira a potência em ' + wkw));

    if(wkw == 'W'){
        power /= 1000
    }else if(wkw != 'kW'){
        alert('Unidade inválida, favor repita processo');
        principal();
    }

    let time = parseInt(prompt('Insira durante quantas horas diárias seu/sua '+ name +' é usad@ (h)')), res = power * time * 30, price = Number(prompt('Insira valor cobrado por kWh'));

    alert('Seu/sua ' + name + ' usa ' + res.toFixed(2) + 'kWh, lhe custando um total de R$' + (res * price).toFixed(2));
}
