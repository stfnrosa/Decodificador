//regras para criptografia
// e = enter
// i = imes
// a = ai
// o = ober
// u = ufat
//amor = aimober

function criptografar() {
    let textareaEntrada = document.querySelector(".entrada__texto");
    let entrada = textareaEntrada.value; 

    let textareaRetorno = document.querySelector(".retorno__texto");
    let retorno = textareaRetorno.value; 

    let imagemRetorono = document.getElementById("busca-imagem");
    let botaoCopiar = document.querySelector(".retorno__botao-copiar");

    let textoVerificado = verificarLetras(entrada); 
    textareaEntrada.value = textoVerificado; 

    if(imagemRetorono){
        imagemRetorono.remove();
    }
    
    let textoSubstituido = substituirLetras(textoVerificado); 
    textareaRetorno.value = textoSubstituido; 
    textareaRetorno.style.textAlign = "justify";
    botaoCopiar.style.display = "flex";
    textareaRetorno.setAttribute("rows", "15");
    textareaRetorno.setAttribute("maxlength", "200");
}

function verificarLetras(texto) {
    let temAcentos = /[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕ]/.test(texto);
    let temMaiusculas = /[A-Z]/.test(texto);

    if (temAcentos) {
        alert("O texto contém acentos!");
        texto = ""; 
        return texto;
    }

    if (temMaiusculas) {
        texto = texto.toLowerCase();
    }

    return texto;
}

function substituirLetras(texto){
    const substituicoes = {
        "a":"ai",
        "e":"enter",
        "i":"imes",
        "o":"ober",
        "u":"ufat"
    };

    let textoSubstituido = "";
    for(let letra of texto){
        if (letra in substituicoes) {
            textoSubstituido += substituicoes[letra];
        }else {
            textoSubstituido += letra;
        }
    }
    return textoSubstituido;
}

