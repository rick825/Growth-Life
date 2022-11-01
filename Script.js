document.addEventListener('DOMContentLoaded', function() {
const selector = '.navitem';
const elems = Array.from( document.querySelectorAll( selector ) );
const navigation = document.querySelector( '.navul' );

for (var i = 0; i < elems.length; i++) {  
  elems[i].addEventListener('click', function() {  
  var current = document.getElementsByClassName("active");  
  if (current.length > 0) {   
    current[0].className = current[0].className.replace(" active", "");  
  }  
  this.className += " active";  
  });  
}  

} );