function check() {
    var saldo = document.getElementById("saldo").value;

    if (saldo==500) {
        document.getElementById("tekst").innerHTML = "Saldo is gestort zonder bonus.";
    }

    else if (saldo<500) {
        document.getElementById("tekst").innerHTML = "Saldo is niet gestort";
    }

    else {
        document.getElementById("tekst").innerHTML = "Saldo is gestort met bonus.";
    }


}