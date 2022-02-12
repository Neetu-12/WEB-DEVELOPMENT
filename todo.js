function sum() {
    var c = document.createElement("button")
    //    innerHTML ka work uske ander ka likha hua hota h jese transparent dikhta h
    c.innerHTML =  "del"
    c.onclick = function () {
        l.style.display = "none"
        // this.parentElement.removeChild(this)
    }
    var l = document.createElement("li")
    var a = document.getElementById("input").value//getElementById=function call k liye hi hota h....
    var b = document.createTextNode(a)
    l.appendChild(b)
    if (a === "") {
        alert("Enter something pls")
    }
    else {
        document.getElementById("ul1").appendChild(l).appendChild(c)
    }
    document.getElementById("input").value = ""
}
function closeAll() {
    var ul = document.getElementsByTagName("ul")
    console.log(ul)
    ul[0].innerHTML = "";
}