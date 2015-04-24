'use strict';


var operand_1;
var operand_2;
var operand_3;
var operant = "";
var apres_operation = false;
var resultat;
var re_operation = 0;

function appeler_operation(operateur){
    operand_1 = document.getElementById('resultat_actif').value;
    operand_1 = parseFloat(operand_1);
    re_operation = 0;
    switch (operateur){
        case '+':
            operant = operateur;
            CE_effacer();
            break;
        case '-' :
            operant = operateur;
            CE_effacer();
            break;
        case 'x':
            operant = operateur;
            CE_effacer();
            break;
        case '/':
            operant = operateur;
            CE_effacer();
            break;
    }
}
function operation() {
    if(operant != "") {
        operand_2 = document.getElementById('resultat_actif').value;
        operand_2 = parseFloat(operand_2);

        switch (operant) {
            case '+':
                if (re_operation == 0) {
                    resultat = plus(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = plus(resultat, operand_3);
                }
                break;
            case '-':
                if (re_operation == 0) {
                    resultat = moins(operand_1, operand_2);
                    operand_3 = parseFloat(operand_2);
                    re_operation++;
                    apres_operation = true;
                } else {
                    resultat = moins(resultat, operand_3);
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

            }
            document.getElementById('resultat_actif').value = resultat;
    }
}



