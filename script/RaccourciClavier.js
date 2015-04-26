/**
 * Created by omar on 24/04/2015.
 */
"use strict";

document.addEventListener("keydown",function(ev) {
    console.log(ev.keyCode);
    if(ev.keyCode==96)     {ecrire_nb('0');}
    if(ev.keyCode==97)     {ecrire_nb('1');}
    if(ev.keyCode==98)     {ecrire_nb('2');}
    if(ev.keyCode==99)     {ecrire_nb('3');}
    if(ev.keyCode==100)    {ecrire_nb('4');}
    if(ev.keyCode==101)    {ecrire_nb('5');}
    if(ev.keyCode==102)    {ecrire_nb('6');}
    if(ev.keyCode==103)    {ecrire_nb('7');}
    if(ev.keyCode==104)    {ecrire_nb('8');}
    if(ev.keyCode==105)    {ecrire_nb('9');}
    if(ev.keyCode==111)    {appeler_operation('/');}
    if(ev.keyCode==109)    {appeler_operation('-');}
    if(ev.keyCode==107)    {appeler_operation('+');}
    if(ev.keyCode==106)    {appeler_operation('x');}
    if(ev.keyCode==13)     {operation();}
    if(ev.keyCode==110)    {ecrire_nb('.');}
    if(ev.keyCode==32)     {C_effacer();}
    if(ev.keyCode==8)      {CE_effacer();}


    });