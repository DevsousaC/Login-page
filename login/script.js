
/* Esconder senha */
let input = document.querySelector('#psw')
let psw = '#psw-hidden'
function showpsw() {
    console.log('ta funcionando ao clicar')
   if(input.getAttribute("type") == "password") {
       input.setAttribute("type", "text")
       psw.setAttribute("class", "fa-solid fa-eye")
    }
   else{
       input.setAttribute("type", "password");
       psw.setAttribute("class", "fa-solid fa-eye")
           
   }
  };