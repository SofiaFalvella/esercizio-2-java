let totale = 0;

function acquista(){

    let prodotto=0;
    
    prodotto=document.getElementById("nuovoProd").value;
    console.log(typeof(prodotto));

    if(prodotto>0 && !isNaN(prodotto)){
        prodotto = parseFloat(prodotto);
        console.log(prodotto);
        totale += prodotto;
        console.log("totale: " + totale);

        document.getElementById("tot").innerHTML=totale + "€";

    }
}


function reset(){
    totale=0;
    document.getElementById("tot").innerHTML=totale + "€";
}
