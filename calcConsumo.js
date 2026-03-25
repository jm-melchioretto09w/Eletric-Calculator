function principal(){
    wkw = document.getElementById("uni"), power = document.getElementById("potencia"), time = document.getElementById("tempo"), price = document.getElementById("valor"), resultado = document.getElementById("resultado"), preco = document.getElementById("preco");

    wkw = wkw.value;
    power = power.value;
    time = time.value;
    price = price.value;

    if(wkw == 'W'){
        
        power /= 1000

    }
    
    let res = power * time * 30;

    resultado.innerText = "Gasto: " + res.toFixed(2);
    preco.innerText = "Preço: " + (res * price).toFixed(2);

}