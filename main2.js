const input = document.querySelector(".input");
const guzik = document.querySelector(".btn");
const wynik = document.querySelector(".wynik");

guzik.addEventListener(
    'click',
    function (){
        wynik.innerText = input.value * input.value;
    }
);

//sze�cian liczby 
const input2 = document.querySelector(".input2");
const guzik2 = document.querySelector(".btn2");
const wynik2 = document.querySelector(".wynik2");

guzik2.addEventListener(
    'click',
    function (){
        wynik2.innerText = input2.value * input2.value * input2.value;
    }
);