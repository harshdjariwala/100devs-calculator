let answer = document.querySelector('h1');
let calc='';

document.querySelector('#one').addEventListener('click',() =>{
    answer.innerText+=1;
    calc += '1';
})
document.querySelector('#two').addEventListener('click',() =>{
    answer.innerText+=2;
    calc += '2';
})
document.querySelector('#three').addEventListener('click',() =>{
    answer.innerText+=3;
    calc += '3';
})
document.querySelector('#four').addEventListener('click',() =>{
    answer.innerText+=4;
    calc += '4';
})
document.querySelector('#five').addEventListener('click',() =>{
    answer.innerText+=5;
    calc += '5';
})
document.querySelector('#six').addEventListener('click',() =>{
    answer.innerText+=6;
    calc += '6';
})
document.querySelector('#seven').addEventListener('click',() =>{
    answer.innerText+=7;
    calc += '7';
})
document.querySelector('#eight').addEventListener('click',() =>{
    answer.innerText+=8;
    calc += '8';
})
document.querySelector('#nine').addEventListener('click',() =>{
    answer.innerText+=9;
    calc += '9';
})
document.querySelector('#zero').addEventListener('click',() =>{
    answer.innerText+=0;
    calc += '0';
})
document.querySelector('#divide').addEventListener('click',() =>{
    answer.innerText+='/';
    calc += '/';
})
document.querySelector('#multiply').addEventListener('click',() =>{
    answer.innerText+='*';
    calc += '*';
})
document.querySelector('#addition').addEventListener('click',() =>{
    answer.innerText+='+';
    calc += '+';
})
document.querySelector('#CE').addEventListener('click',() =>{
    answer.innerText='';
    calc = '';
})
document.querySelector('#equals').addEventListener('click',() =>{
    // answer.innerText='';
    answer.innerText = eval(calc);
})
document.querySelector('#subtraction').addEventListener('click',() =>{
    answer.innerText+='-';
    calc += '-';
})