
$(document).ready(function(){
$("#addition").click(function(){
   let resultat = addition(parseInt($("#chiffre").val()));
    //afficherResultat(resultat);
    $("#affichageResultat").html(`<div>Le résultat est : ${resultat}</div>`);
    
});
});

$(document).ready(function(){
$("#factorielle").on("click", function(){
    let resultat = factorielle(parseInt($("#chiffre").val()));
    $("#affichageResultat").html(`<div>Le résultat est : ${resultat}</div>`);
});
});
// function afficherResultat(calcul){
//     $("#affichageResultat").html(`<div>le resultat est : ${calcul}</div>`);
// };

function addition(nombre){
    let somme = 0;
    for(var i=1; i<=nombre; i++){
        somme +=i;
    }
    return somme;
};

function factorielle(nombre){
    let produit = 1;
    for(let i=1; i<=nombre; i++){
        produit *=i;

    }
    return produit;

};


