let payaso = 112;
let muneca = 75;
let paquete = 1000;

let nPayaso = 7;
let nMuneca = 5;

function peso(nPayaso, nMuneca, payaso, muneca) {
    /* let pesoP = (nPayaso*payaso);
    let pesoM = (nMuneca*muneca); */
    let pesoTotal = ((nPayaso*payaso)+(nMuneca*muneca));
    alert(pesoTotal);
    let paquete = (pesoTotal/1000);

    let paquetes = Math.ceil(paquete);
    alert(paquetes);

}
peso(nPayaso,nMuneca,payaso,muneca)




