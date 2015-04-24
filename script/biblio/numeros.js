'use strict';

function ecrire_nb(e){
    switch (e){
        case '1':
            if(apres_operation == true){
                CE_effacer();
                un();
                apres_operation = false;
            }else{
                un();
            }
            break;
        case '2':
            if(apres_operation == true){
                CE_effacer();
                deux();
                apres_operation = false;
            }else{
                deux();
            }
            break;
        case '3':
            if(apres_operation == true){
                CE_effacer();
                trois();
                apres_operation = false;
            }else{
                trois();
            }
            break;
        case '4':
            if(apres_operation == true){
                CE_effacer();
                quatre();
                apres_operation = false;
            }else{
                quatre();
            }
            break;
        case '5':
            if(apres_operation == true){
                CE_effacer();
                cinq();
                apres_operation = false;
            }else{
                cinq();
            }
            break;
        case '6':
            if(apres_operation == true){
                CE_effacer();
                six();
                apres_operation = false;
            }else{
                six();
            }
            break;
        case '7':
            if(apres_operation == true){
                CE_effacer();
                sept();
                apres_operation = false;
            }else{
                sept();
            }
            break;
        case '8':
            if(apres_operation == true){
                CE_effacer();
                huit();
                apres_operation = false;
            }else{
                huit();
            }
            break;
        case '9':
            if(apres_operation == true){
                CE_effacer();
                neuf();
                apres_operation = false;
            }else{
                neuf();
            }
            break;
        case '.':
            if(apres_operation == true){
                CE_effacer();
                point();
                apres_operation = false;
            }else{
                point();
            }
            break;
        case '±':
            if(apres_operation == true){
                plus_moins();
                apres_operation = false;
            }else {
                plus_moins();
                apres_operation = true;
            }
            break;
        case 'n!':
            if(apres_operation == true){
                factoriel();
                apres_operation = false;
            }else{
                factoriel();
            }
            break;
        case 'r_carre':
            if(apres_operation == true){
                racine_carre();
                apres_operation = false;
            }else{
                racine_carre();
            }
            break;
        case 'r_cube':
            if(apres_operation == true){
                racine_cubique();
                apres_operation = false;
            }else{
                racine_cubique();
            }
            break;
        case '0':
            if(apres_operation == true){
                CE_effacer();
                zero();
                apres_operation = false;
            }else{
                zero();
            }
            break;
    }
}

function un(){
    document.getElementById('resultat_actif').value += '1';
}
function deux(){
    document.getElementById('resultat_actif').value += '2';
}
function trois(){
    document.getElementById('resultat_actif').value += '3';
}
function quatre(){
    document.getElementById('resultat_actif').value += '4';
}
function cinq(){
    document.getElementById('resultat_actif').value += '5';
}
function six(){
    document.getElementById('resultat_actif').value += '6';
}
function sept(){
    document.getElementById('resultat_actif').value += '7';
}
function huit(){
    document.getElementById('resultat_actif').value += '8';
}
function neuf(){
    document.getElementById('resultat_actif').value += '9';
}
function point(){
    document.getElementById('resultat_actif').value += '.';
}
function plus_moins(){
    var a;
    a = document.getElementById('resultat_actif').value;
    var caractere;
    caractere = "-";
    var chiffre;
    if(a.charAt(0) != "-"){
        chiffre = caractere.concat(a);
        document.getElementById('resultat_actif').value = chiffre;
    }
    if(a.charAt(0) == "-"){
        chiffre = a.replace(/-/g,"");
    }
       document.getElementById('resultat_actif').value = chiffre;
}
function zero(){
    document.getElementById('resultat_actif').value += '0';
}

function factoriel(){
    var a = document.getElementById('resultat_actif').value;
    a = parseFloat(a);
    var result = 1;
    for (var i = a; i > 0; i--){
        result = result * i;
        console.log(i);
    }
    document.getElementById('resultat_actif').value = result;
}
function racine_carre(){
    var a = document.getElementById('resultat_actif').value;
    a = parseFloat(a);
    var result;
    result = Math.sqrt(a);
    document.getElementById('resultat_actif').value = result;
}
function racine_cubique(){
    var a = document.getElementById('resultat_actif').value;
    a = parseFloat(a);
    var result;
    result = Math.pow(a, 1/3);
    result = Math.ceil(result);
    document.getElementById('resultat_actif').value = result;
}
function carre(){
    var a = document.getElementById('resultat_actif').value;
    a = parseFloat(a);
    var result;


    document.getElementById('resultat_actif').value = result;
}

function CE_effacer(){
    document.getElementById('resultat_actif').value = "";
}
function C_effacer(){
    document.getElementById('resultat_actif').value = "";
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






