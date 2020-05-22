const input5 = document.querySelector(".input5");
const btn5 = document.querySelector(".btn5");
const wynik5 = document.querySelector(".wynik5");
const input6 = document.querySelector(".input6");
const btn6 = document.querySelector(".btn6");
const wynik6 = document.querySelector(".wynik6");

btn5.addEventListener(
    'click',
    function(){
        wynik5.innerText = input5.value * 1 + 273.15;
    }
);

btn6.addEventListener(
    'click',
    function(){
        wynik6.innerText = input6.value - 273.15;
    }
);
const r = document.querySelector(".r");
const btn10 = document.querySelector(".btn10");
const wynik10 = document.querySelector(".wynik10");

btn10.addEventListener(
    'click',
    function(){
        wynik10.innerText = r.value * r.value;
    }
)