/**
 *Les équations pour les boutons particulié
 * @param a
 * @param b
 * @returns {*}
 */
'use strict';
/**
 * équation de base:
 facile à concevoir et à utiliser
*/
function plus(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    var result;
    result = a + b;
    return result
}
function moins(a, b){
    var result;
    result = a - b;
    return result;
}
function fois(a, b){
    var result;
    result = a * b;
    return result;
}
function divise(a, b){
    var result;
    if(0 != b) {
        result = a / b;
    }else{
        result = "div. par 0 impossible";
         apres_operation = true;
    }
        return result;
}
function exposant(a, b){
    var result;
    result = Math.pow(a, b);
    return result;
}

/**
 *Fonction/équations immédiate
 Fonctions qui calcule immédiatement en cliquant
 */
function bouton_log(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    result= Math.log(a)/Math.log(10);
    console.log(resultat);
    //result = Math.ceil(result);
    //console.log(result);
    if(isNaN(result)){
        document.getElementById('resultat_actif').innerHTML = 'Chiffre avant';
        setTimeout(C_effacer, 800);
    }
    else{
        document.getElementById('resultat_actif').innerHTML = result;
    }
}
function reverse_log(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    result = Math.pow(10, a);
    if(isNaN(result)){
        document.getElementById('resultat_actif').innerHTML = 'Chiffre avant';
        setTimeout(C_effacer, 800);
    }
    else{
        document.getElementById('resultat_actif').innerHTML = result;
    }
}
function factoriel(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result = 1;
    for (var i = a; i > 0; i--){
        result = result * i;
        console.log(i);
    }
    if(isNaN(result)){
        document.getElementById('resultat_actif').innerHTML = 'erreur';
        setTimeout(C_effacer, 800);
    }
    else if(document.getElementById('resultat_actif').innerHTML == ""){
        document.getElementById('resultat_actif').innerHTML = '0! = ' + result;
        setTimeout(function(){
            C_effacer();
            document.getElementById('resultat_actif').innerHTML = result;
        }, 800);


    }
    else{
        document.getElementById('resultat_actif').innerHTML = result;
    }
}
function racine_carre(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    result = Math.sqrt(a);
    if(isNaN(result)){
        document.getElementById('resultat_actif').innerHTML = 'Chiffre avant';
        setTimeout(C_effacer, 800);
    }
    else{
        document.getElementById('resultat_actif').innerHTML = result;
    }
}
function racine_cubique(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    var result2;
    result = Math.pow(a, 1/3);
    console.log(result);
    result2 = result.toString();
    console.log(result2);
    var num;
    if (result2.length > 3 && result2.indexOf(".") != -1 && a.toString().indexOf(".") == -1) {
        num = result2.substring(result2.indexOf(".") + 1, result2.indexOf(".") + 2);
        for (var i = 8; i <= 9; i++) {
            console.log(num);
            if(num.toString() == i){
                result = Math.ceil(result);
                console.log(result,'in');
            }
        }
    }
    document.getElementById('resultat_actif').innerHTML = result;
}
function carre(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    result = a * a;
    document.getElementById('resultat_actif').innerHTML = result;
}
function cube(){
    var a = document.getElementById('resultat_actif').innerHTML;
    a = parseFloat(a);
    var result;
    result = a * a * a;
    document.getElementById('resultat_actif').innerHTML = result;
}

/**
 *Équation complexe
 Équations plus complexe qui nécéssite
 l'utilisation du '=' pour en connaitre
 le résultat;
*/
function x_racine_y(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    var result;
    var result2;
    //b carre de a = a^(1/b);
    result = Math.pow(a, 1/b);
    console.log(result);
    result2 = result.toString();
    console.log(result2);
    var num;
    /**
     * explication de la condition
    si la chaine de caractere du nombre est plus grande que trois, qu'elle contient
    un point, et que a n'est pas décimale
    */
    if (result2.length > 3 && result2.indexOf(".") != -1 && a.toString().indexOf(".") == -1) {
        num = result2.substring(result2.indexOf(".") + 1, result2.indexOf(".") + 2);
        //num est le premier chiffre après le point(premier nombre décimal)
        for (var i = 8; i <= 9; i++) {
            console.log(num);
            /**
             * Explication de la condition
             si num (premier décimal) est égale 8 ou 9,
             la valeur est arrondit au plus proche entier)
            */
            if(num == i){
                result = Math.ceil(result);
                console.log(result,'in');
            }
        }
    }
    return result;
}