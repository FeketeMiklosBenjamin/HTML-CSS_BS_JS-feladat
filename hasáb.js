function kitoltottEgyik() {
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = document.getElementById("c1").value;
    return a != "" && b != "" && c !="";
}
function tszamol() {
    if (kitoltottEgyik()) {
        var a = parseInt(document.getElementById("a1").value);
        var b = parseInt(document.getElementById("b1").value);
        var c = parseInt(document.getElementById("c1").value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a1").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b1").value = " ";
            }
            if (isNaN(c)) {
                document.getElementById("c1").value = " ";
            }
        } else {
            var terfogat = a * b * c;
            document.getElementById('htérfogat').value = terfogat.toLocaleString();
        }
    }
}

function kitoltottMasik() {
    var a = document.getElementById("a2").value;
    var b = document.getElementById("b2").value;
    var c = document.getElementById("c2").value;
    return a != "" && b != "" && c !="";
}
function fszamol() {
    if (kitoltottMasik()) {
        var a = parseInt(document.getElementById("a2").value);
        var b = parseInt(document.getElementById("b2").value);
        var c = parseInt(document.getElementById("c2").value);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert("A megadott szám nem konvertálható");
            if (isNaN(a)) {
                document.getElementById("a2").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b2").value = " ";
            }
            if (isNaN(c)) {
                document.getElementById("c2").value = " ";
            }
        } else {
            var felszin = 2 * (a * b) + 2 * (b * c) + 2 * (a * c);
            document.getElementById('hfelszin1').value = felszin.toLocaleString();
        }
    }
}