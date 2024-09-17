
var text = "";

for (var i = 0;i < 3;i++){
var a = Math.floor(Math.random() * 11);
var b = Math.floor(Math.random() * 11);
if (a > b){
    text += `<label>${a}</label><BR>`;
    text += "<label>+</label><BR>";
    text += `<label>${b}</label><BR>`;
    text += "<input><BR>";

}
else{
    text += "<label>$(b}</label><BR>";
    text += "<label>+</label><BR>";
    text += "<label>${a}</label><BR>";
    text += "<input><BR>";
}
}

document.getElementById("addMath").innerHTML = text;
