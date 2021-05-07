function kitoltottEgyik() {
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    return a != "" && b != "";
}
function szamol() {
    if (kitoltottEgyik()) {
        var a = parseInt(document.getElementById("a1").value);
        var b = parseInt(document.getElementById("b1").value);
        if (isNaN(a) || isNaN(b)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a1").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b1").value = " ";
            }
        } else {
            var kerulet = (a + b);
            document.getElementById('tkerület').value = kerulet.toLocaleString();
        }
    }
}

function kitoltottMasik() {
    var a = document.getElementById("a2").value;
    var b = document.getElementById("b2").value;
    return a != "" && b != "";
}
function szamol() {
    if (kitoltottMasik()) {
        var a = parseInt(document.getElementById("a2").value);
        var b = parseInt(document.getElementById("b2").value);
        if (isNaN(a) || isNaN(b)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a2").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b2").value = " ";
            }
        } else {
            var terulet = a * b;
            document.getElementById('tterület').value = terulet.toLocaleString();
        }
    }
}