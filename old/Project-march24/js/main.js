
function myFunction() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "Added to Favorites";
    } else {
        x = "Ignore";
    }
    document.getElementById("demo").innerHTML = x;
}


$(document).ready(function(){
    $("#buttonRemove1").click(function(){
        $("#goneImage1").remove();
    });
});


$(document).ready(function(){
    $("#buttonRemove2").click(function(){
        $("#goneImage2").remove();
    });
});

$(document).ready(function(){
    $("#buttonRemove3").click(function(){
        $("#goneImage3").remove();
    });
});

$(document).ready(function(){
    $("#buttonRemove4").click(function(){
        $("#goneImage4").remove();
    });
});

$(document).ready(function(){
    $("#buttonRemove5").click(function(){
        $("#goneImage5").remove();
    });
});

$(document).ready(function(){
    $("#buttonRemove6").click(function(){
        $("#goneImage6").remove();
    });
});


function myFunction() {
    var x = document.getElementById("mySelect");
    x.remove(x.selectedIndex);
}
