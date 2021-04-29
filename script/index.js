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




  var changeImg = (x) => {
      if (x === 1 ){
          //test
          document.getElementById('1').src = "../assets/image2.jfif";
          for (let i =0; i <document.getElementsByClassName("images").length;i++) {
            nom = document.getElementById([i]);
            document.getElementById([i]).src = "../assets/"+nom;
            
          }
      }
      
      console.log(nom)
  }