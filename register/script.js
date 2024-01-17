/* checar se um email é valido */
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("msgemail").classList.remove('incorrect')
            /* Pode adicionar um text caso o email esteja correto */
    }
    else{
    document.getElementById("msgemail").innerHTML="Digite um email valido";
    document.getElementById("msgemail").classList.add('incorrect')
    }
}
/* Primeiro input esconder senha */
let input = document.querySelector('#psw1')
let psw = '#psw-hidden1'
function firstPswShow() {
   if(input.getAttribute("type") == "password") {
       input.setAttribute("type", "text")
    }
   else{
       input.setAttribute("type", "password");
   }
  };

/* segundo input esconder senha */
let secondinput = document.querySelector('#psw2')
let secondpsw = '#psw-hidden2'
function secondPswShow() {
    if(secondinput.getAttribute("type") == "password") {
        secondinput.setAttribute("type", "text")
     }
    else{
        secondinput.setAttribute("type", "password");
    }
   };
 