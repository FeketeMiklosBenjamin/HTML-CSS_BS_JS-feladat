function kitoltottEgyik() {
    var a = document.getElementById("a1").value;
    return a != "";
}
function szamol() {
    if (kitoltottMindketto()) {
        var a = parseInt(document.getElementById("a1").value);
        if (isNaN(a)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a1").value = " ";
            }
        } else {
            var terfogat = a * a * a;
            document.getElementById('ktérfogat').value = terfogat.toLocaleString();
        }

    }
}

function kitoltottMásik() {
    var a = document.getElementById("a2").value;
    return a != "";
}
function szamol() {
    if (kitoltottMindketto()) {
        var a = parseInt(document.getElementById("a2").value);
        if (isNaN(a)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a2").value = " ";
            }
        } else {
            var felszin = 6 * (a * a);
            document.getElementById('kfelszin').value = felszin.toLocaleString();
        }

    }
}