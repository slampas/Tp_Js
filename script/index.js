function validateForm() {
    var x = document.forms["monForm"]["name"].value;
    
      alert(x);

  }

  function valideralerte(){

    let nom = document.getElementById("name").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    
    let choix = document.getElementById("choix").value;
    let box= document.getElementsByName("checkbox").value;

    alert("le nom : "+nom +" , le prenom : "+ prenom+" , l'email : "+email+
    ", la ville  : "+choix +" ,acceptation cgv : "+box)
  }




  var changeImg = () => {


            let imgTemp = document.getElementById("pic2").src;
            document.getElementById("pic2").src = document.getElementById("pic1").src;
            let imgTemp2 = document.getElementById("pic3").src;
            document.getElementById("pic3").src = imgTemp;
            let imgTemp3 = document.getElementById("pic4").src;
            document.getElementById("pic4").src = imgTemp2;
            document.getElementById("pic1").src = imgTemp3;
            
          }
      
