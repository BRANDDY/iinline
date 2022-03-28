function post(){
    var newli = document.createElement("li");
    var ul = document.getElementById("postul");
    ul.insertBefore(newli,ul.firstChild);

    var newdiv = document.createElement("div");
    newli.appendChild(newdiv);
// imag
    var hi = document.createElement("h1");
    newli.appendChild(hi);

    var biao = document.getElementById("title");
    hi.innerText = biao.value;

    var newp = document.createElement("p");
    newli.appendChild(newp);

    var ban = document.getElementById("sec");
    newp.innerText = "Store:" + ban.value;

    var span = document.createElement("span");
    newp.appendChild(span);

    span.style.marginLeft = "400px";
}