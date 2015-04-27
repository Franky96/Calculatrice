'use strict';

/**
 * fonction qui agissent sur le document
 * @param operateur
 */

function appeler_operation(operateur){

    operand_1 = document.getElementById('resultat_actif').innerHTML;
    operand_1 = parseFloat(operand_1);
    re_operation = 0;
    var result = 0;

    switch (operateur) {
        case '+':
            if (deja_operer == 0 || deja_operer == 1) {
                if (re_appeler_operation == 0) {
                    tab = [];
                    operant = operateur;
                    re_appeler_operation++;
                    tab.push(operand_1);
                    deja_operer = 1;
                    CE_effacer();
                } else {
                    tab.push(operand_1);
                    for (var i = 0; i < tab.length; i++) {
                        result = plus(result, tab[i]);
                    }
                    deja_operer = 1;
                    resultat = result;
                    document.getElementById('resultat_actif').innerHTML = resultat;
                    apres_operation = true;
                    operand_1 = resultat;
                }
            }
            break;
        case '-' :
            if (deja_operer == 0 || deja_operer == 2) {
                if (re_appeler_operation == 0) {
                    tab = [];
                    operant = operateur;
                    re_appeler_operation++;
                    tab.push(operand_1);
                    deja_operer = 2;
                    CE_effacer();
                } else {
                    tab.push(operand_1);
                    for (var j = 0; j < tab.length; j++) {
                        if(j == 0) {
                            result = moins(tab[j], result);
                        }else{
                            result = moins(result, tab[j]);
                        }
                    }
                    deja_operer = 2;
                    resultat = result;
                    document.getElementById('resultat_actif').innerHTML = resultat;
                    apres_operation = true;
                    operand_1 = resultat;
                }
            }
            break;
        case 'x':
            if (deja_operer == 0 || deja_operer == 3) {
                if (re_appeler_operation == 0) {
                    tab = [];
                    operant = operateur;
                    re_appeler_operation++;
                    tab.push(operand_1);
                    deja_operer = 3;
                    CE_effacer();
                } else {
                    tab.push(operand_1);
                    result = 1;
                    for (var k = 0; k < tab.length; k++) {
                        result = fois(result, tab[k]);
                    }
                    deja_operer = 3;
                    resultat = result;
                    document.getElementById('resultat_actif').innerHTML = resultat;
                    apres_operation = true;
                    operand_1 = resultat;
                }
            }
            break;
        case '/':
            if(deja_operer == 0 || deja_operer == 4){
                operant = operateur;
                CE_effacer();
                deja_operer = 4;
            }
            break;
        case 'x_r_carre_y':
            //if(deja_operer == 0 || deja_operer == 5) {
                operant = operateur;
                CE_effacer();
                deja_operer = 5;
            //}
            operant = operateur;
            CE_effacer();
            break;
    }
}
function operation() {
    if(operant != "") {
        deja_operer = 0;
        operand_2 = document.getElementById('resultat_actif').innerHTML;
        operand_2 = parseFloat(operand_2);

        switch (operant) {
            case '+':
                if (re_operation == 0) {
                    resultat = plus(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                    re_appeler_operation = 0;
                } else {
                    resultat = plus(resultat, operand_3);
                    re_appeler_operation = 0;
                }
                break;
            case '-':
                if (re_operation == 0) {
                    resultat = moins(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                    re_appeler_operation = 0;
                } else {
                    resultat = moins(resultat, operand_3);
                    re_appeler_operation = 0;
                }
                break;
            case 'x':
                if (re_operation == 0) {
                    resultat = fois(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = fois(resultat, operand_3);
                }
                break;
            case '/':
                if (re_operation == 0) {
                    resultat = divise(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = divise(resultat, operand_3);
                }
                break;
            case 'x_r_carre_y':
                if (re_operation == 0) {
                    console.log('-----1----');
                    resultat = x_racine_y(operand_2, operand_1);
                    console.log(operand_1);
                    console.log(operand_2);
                    console.log(resultat);
                    console.log('-----1----');
                    operand_3 = parseFloat(operand_1);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = x_racine_y(resultat, operand_3);
                }
                break;

            }
            document.getElementById('resultat_actif').innerHTML = resultat;
    }
}
function ecrire_nb(e){
    /**
     *écrit les nombres ou équation immédiate
     agit en fonction du caractère qui lui est
     renvoyer lors du clique d'un bouton;
     */
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
        case 'e':
            if(apres_operation == true){
                CE_effacer();
                e_num();
                apres_operation = false;
            }else{
                e_num();
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
            plus_moins();
            apres_operation = true;
            break;
        case 'n!':
            factoriel();
            apres_operation = true;
            break;
        case 'carre':
            carre();
            apres_operation = true;
            break;
        case 'r_carre':
            racine_carre();
            apres_operation = true;
            break;
        case 'cube':
            cube();
            apres_operation = true;
            break;
        case 'r_cube':
            racine_cubique();
            apres_operation = true;
            break;
        case 'log':
            bouton_log();
            apres_operation = true;
            break;
        case 'reverse_log':
            reverse_log();
            apres_operation = true;
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


