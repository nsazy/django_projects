function myFunction() {
 
  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    addObject.nextProblem();
  }
 
}
function submit(){

  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    addObject.submitData();
  }
}