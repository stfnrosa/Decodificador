const textareaEntrada = document.querySelector(".entrada__texto");
const botaoCriptografar = document.getElementById("botao-criptografar");
const botaoDescriptografar = document.getElementById("botao-descriptografar");
const textareaRetorno = document.querySelector(".retorno__texto");
const imagemRetorono = document.getElementById("busca-imagem");
const botaoCopiar = document.getElementById("botao-copiar");    
const textoPadrao = "Nenhuma mensagem encontrada. Digite o texto que você deseja criptografar ou descriptografar na janela ao lado"    


function criptografar() {
    let entrada = textareaEntrada.value;  
    let textoVerificado = verificarLetras(entrada); 
    textareaEntrada.value = textoVerificado; 

    if (textoVerificado === ""){
        imagemRetorono.hidden = false;
        textareaRetorno.value = textoPadrao;
        botaoCopiar.hidden = true;
        textareaRetorno.style.textAlign = "center";
        textareaRetorno.setAttribute("rows", "5");
        return;
    }else{
        imagemRetorono.hidden = true;
        botaoCopiar.hidden = false;
        textareaRetorno.style.textAlign = "justify";
        textareaRetorno.setAttribute("rows", "15");
    }
    
    let textoSubstituido = encriptar(textoVerificado); 
    textareaRetorno.value = textoSubstituido; 
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

function encriptar(texto){
    let substituicoes = {
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

function trocar(){
    let entrada = textareaEntrada.value;   
    let retorno = textareaRetorno.value;
    if(!botaoCriptografar.disabled){
        botaoCriptografar.disabled = true;
        botaoDescriptografar.disabled = false;
    }else{
        botaoCriptografar.disabled = false;
        botaoDescriptografar.disabled = true;
    }
    if(entrada === ""){
        return;
    }
    if(entrada !== ""){
        textareaEntrada.value = retorno; 
        textareaRetorno.value = entrada;
    }
}


function descriptografar() {
    let entrada = textareaEntrada.value;  
    let textoVerificado = verificarLetras(entrada); 
    textareaEntrada.value = textoVerificado; 

    if (textoVerificado === ""){
        imagemRetorono.hidden = false;
        botaoCopiar.hidden = true;
        textareaRetorno.style.textAlign = "center";
        textareaRetorno.setAttribute("rows", "5");
        return;
    }else{
        imagemRetorono.hidden = true;
        botaoCopiar.hidden = false;
        textareaRetorno.style.textAlign = "justify";
        textareaRetorno.setAttribute("rows", "15");
    }
    
    let textoDecifrado = decifrar(textoVerificado); 
    textareaRetorno.value = textoDecifrado; 
}

function decifrar(texto){
    let substituicoes = {
        "ai":"a",
        "enter":"e",
        "imes":"i",
        "ober":"o",
        "ufat":"u"
    };

    let textoDecifrado = texto;
    for(let padrao in substituicoes){
        let expressaoRegular = new RegExp(padrao, "g");
        textoDecifrado = textoDecifrado.replace(expressaoRegular, substituicoes[padrao]);
    }
    return textoDecifrado;
}

function copiarTexto() {
    let copiar = document.querySelector(".retorno__texto");
    copiar.focus();
    copiar.setSelectionRange(0, copiar.value.length);
    
    try {
      document.execCommand("copy");
      console.log('Texto copiado com sucesso!');
    } catch (err) {
      console.error('Erro ao copiar texto:', err);
    }
}




 
  