window. onload = function() {
        for (i=0 ;i<4 ;++i) {
            document.getElementById("close" + i).onclick = function() {
                this.parentNode.parentNode.style.display = "none" };
        }
}

function openNav() {
        document.getElementById("mySideNav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
    
    function closeNav() {
        document.getElementById("mySideNav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
    }

    // Create a new list item when clicking on the "Add" button
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
            document.getElementById("myUL").appendChild(li);
        }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }