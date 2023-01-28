const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function encriptar(stringEncriptador) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptador = stringEncriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptador.includes(matrizCodigo[i][0])) {
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptador
}
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptador) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptador = stringDesencriptador.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptador.includes(matrizCodigo[i][1])) {
            stringDesencriptador = stringDesencriptador.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptador
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function copiar(){
    var contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");//daba error
    alert("Se copió el texto.");
}