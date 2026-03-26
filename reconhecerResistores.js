function descobrirResist(){
    
    let d1 = document.getElementById("d1");
    d1 = d1.value;

    let d2 = document.getElementById("d2");
    d2 = d2.value;

    let d3 = document.getElementById("d3");
    d3.disabled = true;

    let m = document.getElementById("m");
    m = m.value;

    let t = document.getElementById("t");
    t = t.value;

    let res1 = document.getElementById("resist");

    let res2 = document.getElementById("tolera");

    let faixaNum = document.getElementById("qtd");
    faixaNum = faixaNum.value;

    let value = '';
    if(faixaNum == 5){

        d3.disabled = false;
        d3 = d3.value;

        value = d1 + d2 + d3;

    }else{

        d3.disabled = true;

        value = d1 + d2;

    }

    value = Number(value) * (10 ** m)

    res1.innerText = "Resistência: " + value + "Ω"
    res2.innerText = "Tolerância: " + t + "% = ±" + (value * (t / 100)) + "Ω"

}