function hide() {
    var rznBox = document.getElementById("rznBox");
    var opts = rznBox.options;
    var si = rznBox.selectedIndex;
    var sel = opts[si];

    if (sel.index == 0){
        rznBox.style.borderColor = "red";
    }
    else if (sel.index == 3){
        showProdID();

    }
    else{
        hideProdID();
    }
}

function hideProdID (){
    var prodId = document.getElementById("prodId");
    prodId.className = "hidden";
}

function showProdID (){
    var prodId = document.getElementById("prodId");
    prodId.className = "visible";
}


function scrolling(){
    var scroll = window.scrollY;

    var outer = document.getElementById("banner");
    var m = -0.5;
    var b = 10;
    var newTop = m*scroll + b;
    outer.style.backgroundPositionY = newTop + "px";

}
