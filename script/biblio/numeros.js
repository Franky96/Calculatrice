/*
Les fonctions pour chaque bouton
de la calculatrice
 */
'use strict';

/**
 * touche de base du clavier
 */

function un(){
    document.getElementById('resultat_actif').innerHTML += '1';
}
function deux(){
    document.getElementById('resultat_actif').innerHTML += '2';
}
function trois(){
    document.getElementById('resultat_actif').innerHTML += '3';
}
function quatre(){
    document.getElementById('resultat_actif').innerHTML += '4';
}
function cinq(){
    document.getElementById('resultat_actif').innerHTML += '5';
}
function six(){
    document.getElementById('resultat_actif').innerHTML += '6';
}
function sept(){
    document.getElementById('resultat_actif').innerHTML += '7';
}
function huit(){
    document.getElementById('resultat_actif').innerHTML += '8';
}
function neuf(){
    document.getElementById('resultat_actif').innerHTML += '9';
}
function point(){
    document.getElementById('resultat_actif').innerHTML += '.';
}
function plus_moins(){
    var a;
    a = document.getElementById('resultat_actif').innerHTML;
    var caractere;
    caractere = "-";
    var chiffre;
    if(a.charAt(0) != "-"){
        chiffre = caractere.concat(a);
        document.getElementById('resultat_actif').innerHTML = chiffre;
    }
    if(a.charAt(0) == "-"){
        chiffre = a.replace(/-/g,"");
    }
       document.getElementById('resultat_actif').innerHTML = chiffre;
}
function zero(){
    document.getElementById('resultat_actif').innerHTML += '0';
}
function e_num(){
    document.getElementById('resultat_actif').innerHTML += Math.E;
}

/**
 * Function CE et C
Deux fonction particulière:
C qui efface tout, remet tout à zéro
CE qui n'efface que la value de l'input
 */
function CE_effacer(){
    document.getElementById('resultat_actif').innerHTML = "";
}
function C_effacer(){
    document.getElementById('resultat_actif').innerHTML = "";
    operand_1 = 0;
    operand_2 = 0;
    operand_3 = 0;
    operant = "";
    apres_operation = false;
    resultat = 0;
    re_operation = 0;
    re_appeler_operation = 0;
    tab = [];
    deja_operer = 0;
}

/**
 * changement de couleur au survol
 */
function MouseOver(element){

    element.className = "onmousedown";
}
function MouseOut(element){

    element.className = "onmouseup";
}



