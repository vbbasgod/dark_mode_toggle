const inputE1 = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputE1.checked="false";
updateBody()
function updateBody(){
    if(inputE1.checked){
        bodyEl.style.background="black";
    }else{
        bodyEl.style.background="white";
    }
   
} 
inputE1.addEventListener("input", () => {
    updateBody();
   
  });