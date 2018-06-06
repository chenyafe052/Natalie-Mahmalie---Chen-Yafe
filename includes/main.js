
// var obj = document.getElementById('first');

// window.onclick = function(event) {
//     if (event.target == obj) {
//         obj.style.display = "none";
//     }
// }

// window.onload = function(){
//     document.getElementById('first').onclick = function(){
//         this.parentNode
//         .removeChild(this.parentNode);
//         return false;
//     };
// };




///function fnClose() {
   // document.getElementsByClassName("first").onclick()=function.style.visibility = "hidden";
    // if(obj.style.display == "block")
    
    //}

    window. onload = function() {
        for (i=0 ;i<4 ;++i) {
            document.getElementById("close" + i).onclick = function() {
                this.parentNode.parentNode.style.display = "none" };
        }
    }

