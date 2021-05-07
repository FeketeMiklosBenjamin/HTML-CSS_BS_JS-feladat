function kitoltottEgyik() {
    var a = document.getElementById("a").value;
    return a != "";
}
function kszamol() {
    if (kitoltottMindketto()) {
        var a = parseInt(document.getElementById("a").value);
        if (isNaN(a)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a").value = " ";
            }
        } else {
            var kerulet = 4 * a;
            document.getElementById('rkerület').value = kerulet.toLocaleString();
        }

    }
}

function kitoltottMasik() {
    var e = document.getElementById("e1").value;
    var f = document.getElementById("f1").value;
    return e != "" && f != "";
}
function tszamol() {
    if (kitoltottMasik()) {
        var e = parseInt(document.getElementById("e1").value);
        var f = parseInt(document.getElementById("f1").value);
        if (isNaN(e) || isNaN(f)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(e)) {
                document.getElementById("e1").value = " ";
            }
            if (isNaN(f)) {
                document.getElementById("f1").value = " ";
            }
        } else {
            var terulet = (e + f) / 2;
            document.getElementById('rterület').value = terulet.toLocaleString();
        }
    }
}