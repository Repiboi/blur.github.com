//adding an alert function
function fun(Name) {

   alert ("NOTE: Once you sign in as a guest, No data is beign saved, So all data would be deleted after all.");
    window.location.href="index.html"
 }
 function wrong(){

    alert("Incorrect directories");
}
 document.getElementById("myButton").addEventListener("click",  function(){
   window.location.href = "get.html";
 });
function get(){
  window.location.href="get.html"
}
function next(){
  window.location.href="login.html"
}


 function login(){
      const user = document.getElementById("Username").value.toUpperCase();
      const pass = document.getElementById("Password").value;
  
      if(pass === 123){
        window.location.href="index.html"

       }else{

      alert("Incorect directories");
 }

 }

