var count = 0;

var answerValue = false;
function DisplayProblem(){
  const [a, b] = getRandomValues();
   if (a > b){
     html = `<div>
          <label id="numerator">${a}</label><BR>
          <div>+</div>
          <label id="denominator">${b}</label><BR>
          <input  type="text" id="answer" /><BR><BR>
          <button id="next" onclick="nextProblem()">Next</button>
          <button id="submit" onclick="submitData()" style="display:none;margin:auto">Submit</button>
          </div>`;
          
    }
    else {
      html = `<div>
          <label id="numerator">${b}</label><BR>
          <div>+</div>
          <label id="denominator">${a}</label><BR>
          <input style="width:200px;height:40px; text-align: center" type="text" id="answer" /><BR>
          <button id="next" onclick="nextProblem()">Next</button>
          <button id="submit" onclick="submitData()" style="display:none;margin: auto">Submit</button>
          </div>`;
     
    }
    document.getElementById("addMath").innerHTML += html;
  
   
  }
  var problemArray = [];
  var c, d = 0;
function nextProblem(){
  
  count++;
     
  getData();

  const[a, b] = getRandomValues();
  alert("Count is " + count);
 if (count == 2){
      if (a > b){
        //alert("Count is " + count + "a > b");
        document.getElementById("numerator").textContent = a;
        document.getElementById("denominator").textContent = b;
        document.getElementById("next").style.display="none";
        document.getElementById("submit").style.display="block";
        //document.getElementById("answer").value ="";
        
      }else{
        //alert("Count is 2, a < b");
        document.getElementById("numerator").textContent = b;
        document.getElementById("denominator").textContent = a;
        document.getElementById("next").style.display="none";
        document.getElementById("submit").style.display="block";
       // document.getElementById("answer").value ="";
        
      }

 }
 else{
      if(a > b){
        //alert("Count is " + count + "a > b");
        document.getElementById("numerator").textContent = a;
        document.getElementById("denominator").textContent = b;
       
      }else{
        //alert("Count is " + count + "a < b");
        document.getElementById("numerator").textContent = b;
        document.getElementById("denominator").textContent = a;
        
      }

 }

   
   
    document.getElementById("answer").value ="";
     
 }

//  function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }    
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
function submitData(){
  const csrfToken = getCookie('csrftoken');
  alert(csrfToken);
  //pushDataToJSONArray();
  getData();
  //alert(JSON.stringify(problemArray));
    $.ajax({
    url:'/submitSingAdd/' ,
    headers:{'X-CSRFToken': csrfToken },
    
    type: "POST",
    data: JSON.stringify(problemArray),//JSON.stringify(problemArray)
    contentType: 'application/json',
    success: function(data){
      $('.newdiv').replaceWith(data);
    }, 
    error: function(xhr, status, error){
      alert("Error sending data");
    }

});

}//end function submitData
function pushDataToJSONArray(){
  var problem ={
    numerator:document.getElementById("numerator").textContent,
    denominator:document.getElementById("denominator").textContent,
    answer:document.getElementById("answer").value,
    answerValue:answerValue
  };


problemArray.push(problem);
//alert(JSON.stringify(problemArray));
} 
function newProblem(){
  
}//end newProblem
function getRandomValues(){
    // switch (decimalength){

    //     case 1:
    //       var a = Math.floor(Math.random() * 11);
    //       var b = Math.floor(Math.random() * 11);
    //       return [a, b];
    //     case 2:
    //       var a = Math.floor(Math.random() * 101);
    //       var b = Math.floor(Math.random() * 101);
    //       return [a, b];
    // }
    
      var a = Math.floor(Math.random() * 11);
      var b = Math.floor(Math.random() * 11);
      return [a, b];
  
  // var a = Math.floor(Math.random() * 11);
  // var b = Math.floor(Math.random() * 11);
  // return [a, b];
}//end getRandomValues
function getData(){
  var top = parseInt(document.getElementById("numerator").textContent);
  var bottom = parseInt(document.getElementById("denominator").textContent);
  var ans = parseInt(document.getElementById("answer").value);
  var answer = top + bottom;
  //alert(answer);
  console.log(answer);
  // alert("Numerator is " + typeof(top));
  // alert("Denominator is " + typeof(bottom));
  // alert("User Answer is " + typeof(ans));

  //alert("Numerator is " + top + " denominator is " + bottom + " answer is " + ans);
  if ((top + bottom) === ans){
    //alert("Answer " + answer + " equals answer " + ans);
    answerValue = true;
    //alert("Answer Value is " + answerValue);
    alert("Your answer " + answer + "is correct, Great Job!");
  }
  else{
    answerValue = false;
    //alert("Answer Value is " + answerValue);
  }
  
  
  pushDataToJSONArray();
}

 




