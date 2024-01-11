const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-Container");
function addtask(){
    if( inputBox.value === ''){
        alert("You Must Write Something");
    }
    else{
          let li = document.createElement("li");
 li.innerHTML = inputBox.value ; 
 listContainer.appendChild(li);
 let span = document.createElement("span");
 span.innerHTML = "\u00d7"
 li.appendChild(span);
 
    }
    inputBox.value="";
    savedData();

}
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false); 
function savedData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
