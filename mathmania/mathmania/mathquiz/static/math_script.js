class Add {
  
  static c = 0;
  static answerValue = false;
  static problemArray = [];
  static count = 0;
 

  constructor(targetElement, add){
    this.targetElement = targetElement
    this.add = add
  }
  
   displayProblem(){
   alert("Add is " + this.add)
   alert("TargetElement is "+ this.targetElement);
    const [a, b] = this.getRandomValues(this.add);
   alert("A is " + a + "B is " + b);
 
   if (a > b){
    //create elements
   this.div = document.createElement('div');
   this.numerator = document.createElement("label");
   this.div1 = document.createElement("div");
   this.denominiator = document.createElement("label");
   this.break = document.createElement("br");
   this.input = document.createElement("input");
   this.break2 = document.createElement("br");
   this.button1 = document.createElement("button");
   this.button2 = document.createElement("button");

   //set context
   this.numerator.textContent = a;
   this.numerator.id = "numerator";
   this.div1.textContent = '+';
   this.denominiator.textContent = b;
   this.denominiator.id = "denominator";
   this.input.setAttribute("type", "text");
   this.input.id = "answer";
   this.input.style = "width:200px;height:40px; text-align: center";
   this.button1.textContent = "Next";
   this.button1.setAttribute("id", "next");
   //this.button1.id = "next";
   this.button1.setAttribute('onclick', "addObject.nextProblem()");
   this.button2.textContent = "Submit";
   this.button2.id = "submit";
   this.button2.style="display:none";
   this.button2.setAttribute('onclick', "addObject.submitData()");

   //append element to the container
   this.targetElement.appendChild(this.numerator);
   this.targetElement.appendChild(this.div1);
   this.targetElement.appendChild(this.denominiator);
   this.targetElement.appendChild(this.break);
   this.targetElement.appendChild(this.input);
   this.targetElement.appendChild(this.break2);
   this.targetElement.appendChild(this.button1);
   this.targetElement.appendChild(this.button2);
  }
  else{
   this.div = document.createElement('div');
   this.numerator = document.createElement("label");
   this.div1 = document.createElement("div");
   this.denominiator = document.createElement("label");
   this.break = document.createElement("br");
   this.input = document.createElement("input");
   this.break2 = document.createElement("br");
   this.button1 = document.createElement("button");
   this.button2 = document.createElement("button");


   //set context
   this.numerator.textContent = b;
   this.numerator.id = "numerator";
   this.div1.textContent = '+';
   this.denominiator.textContent = a;
   this.denominiator.id = "denominator";
   this.input.setAttribute("type", "text");
   this.input.id = "answer";
   this.input.style = "width:200px;height:40px; text-align: center";
   this.button1.textContent = "Next";
   //this.button1.id = "next";
   this.button1.setAttribute("id", "next");
   this.button1.setAttribute('onclick', "addObject.nextProblem()");
   this.button2.textContent = "Submit";
   this.button2.id = "submit";
   this.button2.style="display:none";
   this.button2.setAttribute('onclick', "addObject.submitData()");

   //append element to the container
   this.targetElement.appendChild(this.numerator);
   this.targetElement.appendChild(this.div1);
   this.targetElement.appendChild(this.denominiator);
   this.targetElement.appendChild(this.break);
   this.targetElement.appendChild(this.input);
   this.targetElement.appendChild(this.break2);
   this.targetElement.appendChild(this.button1);
   this.targetElement.appendChild(this.button2);
  }
   }
   
   getRandomValues(add){
    switch (add){

        case "One":
          var a = Math.floor(Math.random() * 10);
          var b = Math.floor(Math.random() * 10);
          return [a, b];
        case "Two":
          var a = Math.floor(Math.random() * 101);
          var b = Math.floor(Math.random() * 101);
          return [a, b];
    }
    
      // var a = Math.floor(Math.random() * 11);
      // var b = Math.floor(Math.random() * 11);
      // return [a, b];
  
        // var a = Math.floor(Math.random() * 11);
        // var b = Math.floor(Math.random() * 11);
        // return [a, b];
  }//end getRandomValues

  nextProblem(){
  
    Add.count++;
       
    this.getData();
  
    const[a, b] = this.getRandomValues(this.add);
    alert("Count is " + Add.count);
    
   if (Add.count == 5){
        if (a > b){
          alert("Count is " + Add.count + "a > b");
          document.getElementById("numerator").textContent = a;
          document.getElementById("denominator").textContent = b;
          document.getElementById("next").style.display="none";
          document.getElementById("submit").style.display="block";
          document.getElementById("submit").style.margin="auto";
          document.getElementById("answer").value ="";
          
        }else{
          alert("Count is 2, a < b");
          document.getElementById("numerator").textContent = b;
          document.getElementById("denominator").textContent = a;
          document.getElementById("next").style.display="none";
          document.getElementById("submit").style.display="block";
          document.getElementById("submit").style.margin="auto";
          document.getElementById("answer").value ="";
          
        }
  
   }
   else{
        if(a > b){
          alert("Count is " + Add.count + "a > b");
          document.getElementById("numerator").textContent = a;
          document.getElementById("denominator").textContent = b;
         
        }else{
          alert("Count is " + Add.count + "a < b");
          document.getElementById("numerator").textContent = b;
          document.getElementById("denominator").textContent = a;
          
        }
  
   }
  
     
     
      document.getElementById("answer").value ="";
       
   }//end function nextProblem()

   getData(){
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
      Add.answerValue = true;
      //alert("Answer Value is " + answerValue);
      alert("Your answer " + answer + "is correct, Great Job!");
    }
    else{
      Add.answerValue = false;
      //alert("Answer Value is " + answerValue);
    }
    
    
    this.pushDataToJSONArray();
  }//end function getData()

  getCookie(name) {
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
  }// end getCookie function

  submitData(){
    const csrfToken = this.getCookie('csrftoken');
    alert(csrfToken);
    //pushDataToJSONArray();
    this.getData();
    //alert(JSON.stringify(problemArray));
      $.ajax({
      url:'/submitSingAdd/' ,
      headers:{'X-CSRFToken': csrfToken },
      
      type: "POST",
      data: JSON.stringify(Add.problemArray),//JSON.stringify(problemArray)
      contentType: 'application/json',
      success: function(data){
        $('.newdiv').replaceWith(data);
      }, 
      error: function( error){
        alert("Error sending data", error);
      }
  
  });
  
  // fetch('/submitSingAdd/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
     
  //   },
  //   body: JSON.stringify(Add.problemArray),
  // })
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`Response status: ${response.status}`);
  //   }
  //   return response.text(); // Assuming the response is in JSON format
  // })
  // .then(data => {
  //   $('.newDiv').replaceWith(data);
   

  // })
      
  //   .catch(error => {
  //   console.log('Error:', error);
  // });

  

  
  }//end function submitData

  pushDataToJSONArray(){
    var problem ={
      numerator:document.getElementById("numerator").textContent,
      denominator:document.getElementById("denominator").textContent,
      answer:document.getElementById("answer").value,
      answerValue:Add.answerValue
    };
  
  
  Add.problemArray.push(problem);
  //alert(JSON.stringify(problemArray));
  } 

  

}//end class Add

// function displayProblem(){
 
//   myObject.displayProblem(add);
// }

// function nextProblem(){
//   renderer.newProblem();
// }

//  function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }    






 




