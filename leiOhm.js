function leiOhm(){
    let proc = document.getElementById("proc");
    proc = proc.value;

    let u = document.getElementById("tensao"),r = document.getElementById("resistencia"),i = document.getElementById("corrente");

    let resultado = document.getElementById("resultado");

    if(proc == 'U'){

        u.disabled = true;
        r.disabled = false;
        i.disabled = false;

    }else if(proc == 'R'){

        u.disabled = false;
        r.disabled = true;
        i.disabled = false;

    }else if(proc == 'I'){

        u.disabled = false;
        r.disabled = false;
        i.disabled = true;
        
    }

    u = u.value;
    r = r.value;
    i = i.value;

    let res, uni;

    switch(proc){
        case 'U':

            res = r * i;
            uni = 'V'

            break;
        case 'R':

            res = u / i;
            uni = 'Ω'

            break;
        case 'I':

            res = u / r;
            uni = 'A'

            break;
    }

    resultado.innerText = 'A ' + proc + ' é de ' + res + uni;
}