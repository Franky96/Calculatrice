'use strict';


var operand_1;
var operand_2;
var operand_3;
var operant = "";
var deja_operer = 0;
var apres_operation = false;
var resultat = 0;
var re_operation = 0;
var tab = [];
var re_appeler_operation = 0;

function appeler_operation(operateur){

    operand_1 = document.getElementById('resultat_actif').value;
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
                    document.getElementById('resultat_actif').value = resultat;
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
                    for (var i = 0; i < tab.length; i++) {
                        if(i == 0) {
                            result = moins(tab[i], result);
                        }else{
                            result = moins(result, tab[i]);
                        }
                    }
                    deja_operer = 2;
                    resultat = result;
                    document.getElementById('resultat_actif').value = resultat;
                    apres_operation = true;
                    operand_1 = resultat;
                }
            }
            break;
        case 'x':
            if(deja_operer == 0 || deja_operer == 3){
                operant = operateur;
                CE_effacer();
                deja_operer = 3;
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
            if(deja_operer == 0 || deja_operer == 5) {
                operant = operateur;
                CE_effacer();
                deja_operer = 5;
            }
            break;
    }
}
function operation() {
    if(operant != "") {
        deja_operer = 0;
        operand_2 = document.getElementById('resultat_actif').value;
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
                    if (re_appeler_operation == 0);
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
                    console.log('coucou');
                    resultat = x_racine_y(operand_2, operand_1);
                    operand_3 = parseFloat(operand_1);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = x_racine_y(resultat, operand_3);
                }
                break;

            }
            document.getElementById('resultat_actif').value = resultat;
    }
}



