function addFunction() {
 
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
function addSubmit(){

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
function subFunction() {
 
  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    subObject.nextProblem();
  }
 
}
function subSubmit(){

  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    subObject.submitData();
  }
}
function mulFunction() {
 
  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    mulObject.nextProblem();
  }
 
}
function mulSubmit(){

  let x = document.getElementById("answer").value;
  
  let text ="";
  if (isNaN(x) || x === "") {
    text = "Input not valid";
    alert(text);
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    mulObject.submitData();
  }
}

function divFunction() {
 
  let x = document.getElementById("answer").value;
  var regexOne = /[0-9][R][0-9]/i;
  var regexTwo = /[0-9]+/;
  let text ="";
 
  if (x.match(regexOne) || x.match(regexTwo)) {//isNaN(x) || x !== "R" || x !== "r"
    divObject.nextProblem();
   
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    text = "Input not valid";
    alert(text);
  }
 
}
function divSubmit(){

  let x = document.getElementById("answer").value;
  
  let text ="";
  var regexOne = /[0-9][R][0-9]/i;
  var regexTwo = /[0-9]+/;
  if (x.match(regexOne) || x.match(regexTwo)) {
    divObject.submitData();
   
    //document.getElementById("validateMsg").textContent = text;
  } else {
    //document.getElementById("validateMsg").textContent = "";
    text = "Input not valid";
    alert(text);
  }
}