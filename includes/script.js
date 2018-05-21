function addSqure() {
    var newObj = document.createElement("section"); 
    var lay3_main = document.getElementById("lay3_main");
    lay3_main.appendChild(newObj);
    newObj.className = "square";
    var rand_opacity = Math.random();
    newObj.style.opacity = rand_opacity;
}

//-------------------------------------
document.getElementById("h1_lay3").onclick = addSqure;
