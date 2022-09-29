function passwordCheck() { 
    var pass1 = document.getElementById("floatingPassword");
    var pass2 = document.getElementById("floatingPassword2");
    if (pass1.value != pass2.value) {
      alert("The first and second passwords do not match \n" +
            "Please re-enter both correctly");
      return false;
    } else
      return true;
  }
  document.getElementById("form").onsubmit = passwordCheck; 
   
  const fileInput = document.getElementById('inputGroupFile03');
  const div1 = document.getElementById('image');
  const img1 = document.getElementById('profile');
  const text = document.getElementById('text');
  fileInput.addEventListener('change', function(){
     const file = this.files[0];
     if(file){
        const reader = new FileReader();
        img1.style.display= 'block';
        text.style.display= 'none';

        reader.addEventListener('load', function(){
        img1.setAttribute('src', this.result);

        });
        reader.readAsDataURL(file);

     }else{
          img1.style.display= null;
          text.style.display= null;
          img1.setAttribute('src', "");

        }

  });

 function passValues(){
  var user = document.getElementById('name').value;
  localStorage.setItem("NAME", user);
  var email = document.getElementById('email').value;
  localStorage.setItem("EMAIL", email);
  var statement = document.getElementById('statement').value;
  localStorage.setItem("STATEMENT", statement);
  var university = document.getElementById('university').value;
  localStorage.setItem("UNIVERSITY", university);
  var sec = document.getElementById('secondary').value;
  localStorage.setItem("SECONDARY", sec);
  var pri = document.getElementById('primary').value;
  localStorage.setItem("PRIMARY", pri);
  var hobby = document.getElementById('hobby').value;
  localStorage.setItem("HOBBY", hobby);

  
  return;
 }






  