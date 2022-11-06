function szamitas(bevitel) {
    var elso = document.getElementById('elso').value;
    var masodik = document.getElementById('masodik').value;
    var operator = bevitel.innerHTML;

    document.getElementById('eredmeny').innerHTML=eval(elso + " " + operator + " " + masodik);
}