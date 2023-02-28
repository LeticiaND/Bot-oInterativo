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
}

function setarErroPara(input, mensagem){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "form-control error"
}

function setarSucessoPara(input){
    const formControl = input.parentElement

    formControl.className = "form-control error"
}