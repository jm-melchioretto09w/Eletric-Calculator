function resistEq(){

    let tipo = document.getElementById("tipo");
    tipo = tipo.value;
    let qtd = document.getElementById("qtd");
    qtd = qtd.value;
    let res = document.getElementById("res");
    res = res.value;
    let resultado = document.getElementById("resultado")


    let ans = 0;

    if(tipo == 1){

        for(let j = 0; j < qtd; j++){

            ans += res;

        }

    }else if(tipo == 2){

        for(let j = 0; j < qtd; j++){

            ans += 1 / res;

        }

        ans = 1 / ans;

    }

    resultado.innerText = "Req: " + ans + "Ω"

}