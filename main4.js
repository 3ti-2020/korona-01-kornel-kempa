const srednia = {
    ocena : document.querySelector(".ocena"),
    waga : document.querySelector(".waga"),
    dodajLiczbe : document.querySelector(".dodajLiczbe"),
    oblicz : document.querySelector(".oblicz"),
    wynikTxt : document.querySelector(".wynikTxt"),
    lista: document.querySelector(".lista"),
    pokazListe : document.querySelector(".pokazListe"),
    listaOcen : document.querySelector(".listaOcen"),

    isShow : 0, 
    suma : 0, 
    dzielnik : 0,

    btnDodajLiczbe: function(){
        this.dodajLiczbe.addEventListener('click', this.dodawanieLiczby.bind(srednia));
    },

    dodawanieLiczby: function(){

        this.lista.innerHTML += "Ocena: " + this.ocena.value + " | Waga: " + this.waga.value + "<br>"; 
 
        this.suma += this.ocena.value*1 * this.waga.value*1; 
        this.dzielnik += this.waga.value*1;

        this.ocena.value = null; 
        this.waga.value = null; 
    },

    btnOblicz: function(){
        this.oblicz.addEventListener('click', this.obliczanie.bind(srednia));
    },

    obliczanie:function(){
        wynik = this.suma/this.dzielnik;
        this.wynikTxt.innerText = wynik.toFixed(1);
    },

    btnPokazListe:function(){
        this.pokazListe.addEventListener('click', this.pokazywanie.bind(srednia));
    },

    pokazywanie:function(){
        if(this.isShow===0){ 
            this.listaOcen.style.display = "block";
            this.isShow = 1;
        }else{
            this.listaOcen.style.display = "none";
            this.isShow = 0;
        }
        
    }
}
srednia.btnDodajLiczbe();
srednia.btnOblicz();
srednia.btnPokazListe();
