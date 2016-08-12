var words = ["s" , "!" , "?" , "'" , "." , "ing", "ed", "y", "ing", "the", "the" , "be" , "to" , "of" , "and" , "a" , "in" , "that" , "have" , "I" , "it" , "for" , "not" , "on" , "with" , "he" , "as" , "you" , "do" , "at" , "this" , "but" , "his" , "will" , "my" , "one" , "all" , "out" , "if" , "about" , "who" , "get" , "which" , "go" , "me" , "when" , "make" , "can" , "like" , "time" , "no" , "just" , "him" , "some" , "could" , "them", "its" , "over" , "think"];
var width = 1000;
var height = 560;


makeDiv = function(text) {
    $magnet = "<div class = 'magnet'> " + text + "</div>";
    $("#surface").append($magnet); 
    $("#surface").children().last().draggable();
};

createDivs = function() {
    var divs = "";
    for (var i = 0; i < words.length; i++) {
        var magnet = "<div class = 'magnet'> " + words[i] + "</div>";
        divs += magnet;
    }
    $("#surface").html(divs); 
    
};

randomizeDivs = function() {
    $(".magnet").each(function() {
        var x = Math.floor(Math.random() * width + 200);
        var y = Math.floor(Math.random() * height + 50);
        $(this).offset({
            left: x,
            top: y
        });
    });
};

newMagnet = function() {
    inputVal = $("#newMagnets input").val();
        if( inputVal != "") {
            $("#newMagnets input").val('');
            makeDiv(inputVal);
    }
};

$(document).ready(function() {
    createDivs();
    randomizeDivs();
    $(".magnet").draggable();
    $("#surface").on("mouseup",".magnet", function() {
        var pos = $(this).offset();
        if(pos.left < 150 || pos.top > 650) {
            $(this).remove();
        }
    });
    
    $("#newMagnets button").click(function() {
        newMagnet();
    });
    
    $("#newMagnets input").keypress(function(e) {
        if (e.which == 13) {
            newMagnet();
        }
    });
});
