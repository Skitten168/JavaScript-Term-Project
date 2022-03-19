$(document).ready(function () {
    //loop for splitting picture into 16 pieces
    var rows = 4, columns = 4;
    var pieces ="";
    //positioning picture to fit each square
    for(var r=0,top=0;r<rows;r++,top-=100)
    {
        for(var c=0,left=0; c<columns; c++,left-=100)
        {
            pieces += "<div style='background-position:" + left + "px " + top + "px;' class='piece'></div>";
        }
    }
    console.log(pieces);
    $("#puzzleContainer").html(pieces)
});