
function myFunction() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "Added to Favorites";
    } else {
        x = "Ignore";
    }
    document.getElementById("demo").innerHTML = x;
}
