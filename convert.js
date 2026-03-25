function conversorUni(){

    let resultado = document.getElementById("resultado");

    let uniB = document.getElementById("uniP");
    uniB = uniB.value

    let prefix = ['T', 'G', 'M', 'K', '', 'm', 'u', 'n', 'p'];

    let opt1 = document.getElementById("tera1"), opt2 = document.getElementById("giga1"), opt3 = document.getElementById("mega1"), opt4 = document.getElementById("kilo1"), opt5 = document.getElementById("base1"), opt6 = document.getElementById("mili1"), opt7 = document.getElementById("micro1"), opt8 = document.getElementById("nano1"), opt9 = document.getElementById("pico1")
    opt1.innerText = "T" + uniB;
    opt2.innerText = "G" + uniB;
    opt3.innerText = "M" + uniB;
    opt4.innerText = "K" + uniB;
    opt5.innerText = uniB;
    opt6.innerText = "m" + uniB;
    opt7.innerText = "µ" + uniB;
    opt8.innerText = "n" + uniB;
    opt9.innerText = "p" + uniB;

    
    let value = document.getElementById("valor");
    value = value.value;

    let uni1 = document.getElementById("prefixo1");
    uni1 = uni1.value;

    opt1 = document.getElementById("tera2"), opt2 = document.getElementById("giga2"), opt3 = document.getElementById("mega2"), opt4 = document.getElementById("kilo2"), opt5 = document.getElementById("base2"), opt6 = document.getElementById("mili2"), opt7 = document.getElementById("micro2"), opt8 = document.getElementById("nano2"), opt9 = document.getElementById("pico2")
    opt1.innerText = "T" + uniB;
    opt2.innerText = "G" + uniB;
    opt3.innerText = "M" + uniB;
    opt4.innerText = "K" + uniB;
    opt5.innerText = uniB;
    opt6.innerText = "m" + uniB;
    opt7.innerText = "µ" + uniB;
    opt8.innerText = "n" + uniB;
    opt9.innerText = "p" + uniB;
    
    let uni2 = document.getElementById("prefixo2");
    uni2 = uni2.value;

    let exp;
    let res;

    if(prefix.includes(uni1) && prefix.includes(uni2)){

        exp = prefix.indexOf(uni2) - prefix.indexOf(uni1);
        res = value * (Math.pow(10, (exp * 3)));
        
    }

    resultado.innerText = res
}