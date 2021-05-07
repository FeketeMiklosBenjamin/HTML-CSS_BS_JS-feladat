function kitoltes1() {
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    return a != "" && b != "";
}
function szamol() {
    if (kitoltes1()) {
        var a = parseInt(document.getElementById("a1").value);
        var b = parseInt(document.getElementById("b1").value);
        if (isNaN(a) || isNaN(b)) {
            alert("A megadott adatokkal nem lehet számolni!");
            if (isNaN(a)) {
                document.getElementById("a1").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b1").value = " ";
            }
        } else {
            var kerület = 2 * (a + b);
            document.getElementById('kerület1').value = kerület.toLocaleString();
        }
    }
}

function kitoltes2() {
    var a = document.getElementById("a2").value;
    var b = document.getElementById("b2").value;
    return a != "" && b != "";
}
function szamol() {
    if (kitoltes2()) {
        var a = parseInt(document.getElementById("a2").value);
        var b = parseInt(document.getElementById("b2").value);
        if (isNaN(a) || isNaN(b)) {
            alert("A megadott adatokkal nem lehet számolni!");
            if (isNaN(a)) {
                document.getElementById("a2").value = " ";
            }
            if (isNaN(b)) {
                document.getElementById("b2").value = " ";
            }
        } else {
            var terület = a * b;
            document.getElementById('terület1').value = terület.toLocaleString();
        }
    }
}