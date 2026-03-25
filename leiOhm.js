function leiOhm(){
    let proc = document.getElementById("proc");
    proc = proc.value;

    let u = document.getElementById("tensao"),r = document.getElementById("resistencia"),i = document.getElementById("corrente");

    let resultado = document.getElementById("resultado");

    if(proc == 'U'){

        u.disabled = true;
        u = u.value;
        r.disabled = false;
        r = r.value;
        i.disabled = false;
        i = i.value;

    }else if(proc == 'R'){

        u.disabled = false;
        u = u.value;
        r.disabled = true;
        r = r.value;
        i.disabled = false;
        i = i.value;

    }else if(proc == 'I'){

        u.disabled = false;
        u = u.value;
        r.disabled = false;
        r = r.value;
        i.disabled = true;
        i = i.value;

    }

    let res, uni;

    switch(proc){
        case 'U':

            res = r * i;
            uni = 'V'

            break;
        case 'R':

            res = u / i;
            uni = ' Ω'

            break;
        case 'I':

            res = u / r;
            uni = 'A'

            break;
    }

    resultado.innerText = 'A ' + proc + ' é de ' + res + uni;
}