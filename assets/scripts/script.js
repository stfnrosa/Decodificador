//regras para criptografia
// e = enter
// i = imes
// a = ai
// o = ober
// u = ufat

function criptografar() {
    let textarea = document.querySelector(".entrada__texto");
    let textoInserido = textarea.value;
    let textoVerificado = verificarLetras(textoInserido);
    textarea.value = textoVerificado; 
    console.log(textoVerificado);
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

