// class SingleAdd {
 
//   constructor(a,b){
//     if (a > b){
//     //create elements
//    this.container = document.createElement('div');
//    this.numerator = document.createElement("label");
//    this.div1 = document.createElement("div");
//    this.denominiator = document.createElement("label");
//    this.break = document.createElement("br");
//    this.input = document.createElement("input");
//    this.break2 = document.createElement("br");
//    this.button = document.createElement("button");

//    //set context
//    this.numerator.textContent = a;
//    this.numerator.id = "numerator";
//    this.div1.textContent = '+';
//    this.denominiator.textContent = b;
//    this.denominiator.id = "denominator";
//    this.input.setAttribute("type", "text");
//    this.input.id = "answer";
//    this.input.style = "width:200px;height:40px; text-align: center"
//    this.button.textContent = "Next";
//    this.button.setAttribute('onclick', "nextProblem()");

//    //append element to the container
//    this.container.appendChild(this.numerator);
//    this.container.appendChild(this.div1);
//    this.container.appendChild(this.denominiator);
//    this.container.appendChild(this.break);
//    this.container.appendChild(this.input);
//    this.container.appendChild(this.break2);
//    this.container.appendChild(this.button);
//   }
//   else{
//    this.container = document.createElement('div');
//    this.numerator = document.createElement("label");
//    this.div1 = document.createElement("div");
//    this.denominiator = document.createElement("label");
//    this.break = document.createElement("br");
//    this.input = document.createElement("input");
//    this.break2 = document.createElement("br");
//    this.button = document.createElement("button");

//    //set context
//    this.numerator.textContent = b;
//    this.numerator.id = "numerator";
//    this.div1.textContent = '+';
//    this.denominiator.textContent = a;
//    this.denominiator.id = "denominator";
//    this.input.setAttribute("type", "text");
//    this.input.id = "answer";
//    this.input.style = "width:200px;height:40px; text-align: center"
//    this.button.textContent = "Next";
//    this.button.setAttribute('onclick', "nextProblem()");

//    //append element to the container
//    this.container.appendChild(this.numerator);
//    this.container.appendChild(this.div1);
//    this.container.appendChild(this.denominiator);
//    this.container.appendChild(this.break);
//    this.container.appendChild(this.input);
//    this.container.appendChild(this.break2);
//    this.container.appendChild(this.button);
//   }
//   }

//    render(targetElement){
//     targetElement.appendChild(this.container);
//   }
// }//end class SingleAdd




//var c = 0;
    //var a = 0;
    // var b = 0;
 
    // let html =`<form id="singAdd">
             
    //            `;
        
//     const newAddProblem = new SingleAdd(a,b);
// const container = document.getElementById("addMath");
// newAddProblem.render(container);
    // for (var i = 1;i < 3;i++){
                
    //             a = Math.floor(Math.random() * 11);
    //             b = Math.floor(Math.random() * 11);  
    //             html += `
    //               <div class="p">
    //               <label id="numerator">${a}</label><BR>
    //               <div>+</div>
    //               <label id="denominator">${b}</label><BR>
    //               <input  type="text" id="answer" style="width:200px;height:40px; text-align: center"><BR>
    //               </div>
    //             `;
    // }
    //  document.getElementById("addMath").innerHTML += html;
     
    //  html += `<button>Submit Answers</button>
    //         </form>`;
     
    //  document.getElementById("addMath").innerHTML = html;

/*next script*/
    
// let today = new Date();
// let day = today.getDate();
// let month = today.getMonth();
// let year = 
// problemArray=[];
// var csrftoken =  "{{csrf_token}}"
//   $("button").click(function() {
//     $(".p").each(function(i) {

//       var problem ={
//         numerator:$(this).find("#numerator").text(),
//         denominiator:$(this).find("#denominator").text(),
//         answer:$(this).find("#answer").val()
//       };
//       problemArray.push(problem);
     
//     });//end each 
//   alert(JSON.stringify(problemArray))
//     $.ajax({
//         url:'/submitSingAdd/' ,
//         headers:{'X-CSRFToken': csrftoken},
//         type: "POST",
//         data: JSON.stringify(problemArray),
//         contentType: 'application/json',
//         success: function(response){
//             alert("Success");
//         }, 
//         error: function(xhr, status, error){
//           alert("Error sending data");
//         }

//     });
    //alert(JSON.stringify(problemArray));
  //});//end 


  // addition(){
    
  //   if (this.a > this.b){
  //     alert ("Inside if " + this.a);
  //     html = `
        
  //         <div>
  //         <label id="numerator">${this.a}</label><BR>
  //         <div>+</div>
  //         <label id="denominator">${this.b}</label><BR>
  //         <input  type="text" id="answer" style="width:200px;height:40px; text-align: center" required/><BR>
  //         <button onclick="nextProblem()">Next</button>
  //         </div>`;
          
  //   }
  //   else {
  //     alert ("Inside if " + this.b + " with else");
  //     html = `
  //     <div>
  //     <label id="numerator">${this.b}</label><BR>
  //     <div>+</div>
  //     <label id="denominator">${a}</label><BR>
  //     <input  type="text" id="answer" style="width:200px;height:40px; text-align: center" required/><BR>
  //     <button onclick="nextProblem()">Next</button>
  //     </div>
  //     `;
     
  //   }
  //   document.getElementById("addMath").innerHTML += html;
  // }
//}



//  let html= ``;

                
//               a = Math.floor(Math.random() * 11);
//               b = Math.floor(Math.random() * 11);  
//               html += `
//                 <div class="p">
//                 <label id="numerator">${a}</label><BR>
//                 <div>+</div>
//                 <label id="denominator">${b}</label><BR>
//                 <input  type="text" id="answer" style="width:200px;height:40px; text-align: center"><BR>
//                 </div>
//               `;
  
//    document.getElementById("addMath").innerHTML += html;
   
//    html += `<button>Submit Answers</button>
//           </form>`;
   
//    document.getElementById("addMath").innerHTML = html;

//<div style="background-color: aliceblue;width:100%;text-align:center;padding-top: 20px;padding-bottom: 20px;">
        
//</div>

//style="background-color: aliceblue;width:100%;text-align:center;font-size: 40px;"

//style="background-color: aliceblue;width:100%;text-align:center;font-size: 40px;"

//style="width:200px;height:40px; text-align: center"

//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

//class="bg-light text-center"
//{% load django_bootstrap5 %}
  //    {% bootstrap_css %}
   //   {% bootstrap_javascript %}