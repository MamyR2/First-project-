






function envoyer(){
    // affichage du nom
    var nom = document.querySelector('.formulaire input[name = "nom"]').value;
    var rendu1 = document.getElementById("name"); 
    rendu1.innerText = nom; 

      // affichage du prénom
      var prenom = document.querySelector('.formulaire input[name = "prenom"]').value; 
      var rendu2= document.getElementById("first"); 
      rendu2.innerText = prenom;
   
    // affichage de la date de naissance 
    var birthday = document.querySelector('.formulaire input[name = "date"]').value; 
      var rendu3= document.querySelector(".birthday"); 
      rendu3.innerText = birthday;
   

    // affichage du mail
    var mail = document.querySelector('.formulaire input[name = "mail"]').value; 
      var rendu4= document.querySelector(".mail"); 
      rendu4.innerText = mail;
   
    
    // affichage du telephone
    var phone = document.querySelector('.formulaire input[name = "phone"]').value; 
      var rendu5= document.querySelector(".number"); 
      rendu5.innerText = phone;
   
    // affichage du sexe
    var gender = document.querySelector('.formulaire input[name = "gender"]:checked').value; 
      var rendu6= document.querySelector(".gender"); 
      rendu6.innerText = gender;



    

     
  }

   // INSERTION DES EXPERIENCES PROFESSIONNELLES. 
  function pro(){  

    // Recuperation des valeurs entrées par l'utilisateur
    var anne = document.getElementById("An").value; 
    var poste = document.getElementById("poste").value; 
    var societe = document.getElementById("societe").value; 


    // creation d'une liste pour les informations. 
    var container = document.querySelector(".exp2");

 
    
    //creation de la liste
    var li = document.createElement('li'); 

    var span1 = document.createElement('span'); 
    var span2 = document.createElement('span'); 
    var span3 = document.createElement('span'); 
   
   

    // entreprise
    span3.innerText = societe + " | "; 
    li.appendChild(span3);
    container.appendChild(li); 

    // anneé
    span1.innerText = anne + " :"; 
    li.appendChild(span1);
    container.appendChild(li); 

    //poste 
    span2.innerText = " " + poste; 
    li.appendChild(span2);
    container.appendChild(li); 
  }

      // INSERTION DES Formations. 

  function formation(){
    // INSERTION DES Formations. 

     // Recuperation des valeurs entrées par l'utilisateur
     var periode = document.getElementById("periode").value; 
     var etab = document.getElementById("etab").value; 
     var formation = document.getElementById("formation").value; 

       // creation d'une liste pour les informations. 
     var container = document.querySelector(".form2");

     //creation de la liste
    var li1 = document.createElement('li'); 
    var span4 = document.createElement('span'); 
    var span5 = document.createElement('span'); 
    var span6 = document.createElement('span'); 
   

    // PERIODE
    span4.innerText = periode + " : "; 
    li1.appendChild(span4);
    container.appendChild(li1); 

    // ETABLISSEMENT
    span5.innerText = etab + " | "; 
    li1.appendChild(span5);
    container.appendChild(li1); 

    //FORMATION 
    span6.innerText = formation; 
    li1.appendChild(span6);
    container.appendChild(li1); 

  }


   // COMPETENCE
   function competence(){

    // Recuperation des valeurs entrées par l'utilisateur
     var competence = document.getElementById("compétence").value; 

    // creation d'une liste pour les informations. 
     var container = document.querySelector(".comp");

    //creation de la liste
    var li = document.createElement('li'); 
    var span = document.createElement('span'); 

    //competence
    span.innerText = competence; 
    li.appendChild(span); 
    container.appendChild(li);


   } 

      // LANGUE
      function langue(){

        // Recuperation des valeurs entrées par l'utilisateur
         var langue = document.getElementById("langu").value; 
    
        // creation d'une liste pour les informations. 
         var container = document.querySelector(".lang");
    
        //creation de la liste
        var li = document.createElement('li'); 
        var span = document.createElement('span'); 
    
        //competence
        span.innerText = langue; 
        li.appendChild(span); 
        container.appendChild(li);
    
    
       } 


       function interet(){
        // Recuperation des valeurs entrées par l'utilisateur
        var centre = document.getElementById("interet").value; 
    
        // creation d'une liste pour les informations. 
         var container = document.querySelector(".centr");
    
        //creation de la liste
        var li = document.createElement('li'); 
        var span = document.createElement('span'); 
    
        //competence
        span.innerText = centre; 
        li.appendChild(span); 
        container.appendChild(li);

       }



  // Effaceur experience
  function DelExp(){
    var toDetele = document.querySelectorAll(".exp2 li");
    var parent = document.querySelector(".exp2");
    var i = toDetele.length - 1;
    if(i>=0){
        parent.removeChild(toDetele[i]);
    }
}

  // Effaceur formation
function DelForm(){
  var toDetele = document.querySelectorAll(".form2 li");
  var parent = document.querySelector(".form2");
  var i = toDetele.length - 1;
  if(i>=0){
      parent.removeChild(toDetele[i]);
  }
}

// effaceur compétence
function DelComp(){
  var toDetele = document.querySelectorAll(".comp li");
  var parent = document.querySelector(".comp");
  var i = toDetele.length - 1;
  if(i>=0){
      parent.removeChild(toDetele[i]);
  }
}
  

// effaceur langue
function DelLangue(){
  var toDetele = document.querySelectorAll(".lang li");
  var parent = document.querySelector(".lang");
  var i = toDetele.length - 1;
  if(i>=0){
      parent.removeChild(toDetele[i]);
  }
}
  
// effaceur Centre d'interet
function Delcentre(){
  var toDetele = document.querySelectorAll(".centr li");
  var parent = document.querySelector(".centr");
  var i = toDetele.length - 1;
  if(i>=0){
      parent.removeChild(toDetele[i]);
  }
}
  

