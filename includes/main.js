window. onload = function() {
        for (i=0 ;i<4 ;++i) {
            document.getElementById("close" + i).onclick = function() {
                this.parentNode.parentNode.style.display = "none" };
        }
    }

