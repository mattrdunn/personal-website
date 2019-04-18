function selectNav(clicked) {
    let elems = document.getElementById("nav-bar").children;
    for(let i=0; i < elems.length; i++) {
        if(elems[i].className == "item active nav-item")
            elems[i].className = "item nav-item";
    }
    clicked = document.getElementById(clicked);
    clicked.className = "item active nav-item";
}

