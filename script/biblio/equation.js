'use strict';
/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
function plus(a, b){
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

function x_racine_y(a, b){
    a = parseFloat(a);
    var result;
    result = Math.pow(a, 1/b);
    result = Math.ceil(result);
    return result;
}
