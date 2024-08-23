var submit = document.querySelector(".btn-submit");
var result = document.querySelector(".result")

 submit.addEventListener('click', function(){
    var todayDate = document.getElementById("todayDate").value;
    var birthdayDate = document.getElementById("birthdayDate").value;
     
     console.log(todayDate);
     console.log(birthdayDate);
     
     var td = new Date(todayDate);
     var bd  = new Date(birthdayDate);
     

     var yearAge = td.getFullYear() - bd.getFullYear();
     var monthAge = td.getMonth() - bd.getMonth();
     var dateAge = td.getDate() - bd.getDate();
    
     
     if(monthAge < 0 || (monthAge === 0 && td.getDate() < bd.getDate())){
        yearAge--;
     }
    result.innerHTML = yearAge + " " + "years";
 })

