const form = document.getElementById("form")
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    checarOsInputs()
})

function checarOsInputs(){
    const usernameValue = username.value
    const passwordValue = password.value

    if(usernameValue === ""){
        setarErroPara (username, "O nome é obrigatório")
    }else{
        setarSucessoPara(username)
    }
    if(passwordValue === ""){
        setarErroPara (password, "A senha é obrigatória")
    }else if(passwordValue.length < 7){
        setarErroPara (password, "A senha precisa ter no mínimo 7 caracteres")
    }else{
        setarSucessoPara(password)
    }
}

function setarErroPara(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }

  function setarSucessoPara(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }