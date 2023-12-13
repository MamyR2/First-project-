// function valider(){
//     var anarana = document.querySelector('.division input[name = nom1 ]').value; 
//     var rend = document.querySelector('.rendu'); 
//     rend.innerText = anarana; 



// }
function addListButton(){
    var A = document.querySelector(".liste");
    var B = document.getElementById("nom").value; 
    var li = document.createElement("li"); 
    var liContent = document.createTextNode(B); 
    li.appendChild(liContent); 
    A.appendChild(li); 
}

function effacer(){
    var toDetele = document.querySelectorAll(".liste li");
    var parent = document.querySelector(".liste");
    var i = toDetele.length - 1;
    if(i>=0){
        parent.removeChild(toDetele[i]);
    }
}

function remove(obj){
    const parent = obj.parentNode,
        content = parent.parentNode;

    content.removeChild(parent);    
}

//Ajouter le formulaire pour inserer les expériences professionnelles. 
// function ajouter(){
//     var parent = document.querySelector('.form2')
//     parent.innerHTML += `  <li><input type="text" name="1" id="">
//     <button class="ajouter" onclick="ajouter()">+</button>
//     <button onclick="remove(this)">-</button></li>`;
// }

function valide(){
    var container = document.getElementById("num-list"); 
    var contenu = document.querySelector('input[name ="1"]').value; 
     
    // container.innerHTML += `<li class="content"></li>`;
    // var con = document.querySelector('.content'); 
    // con.innerText = contenu; 

    var li = document.createElement('li'); 
    li.innerText = contenu; 

    container.appendChild(li); 


    
    
}



 