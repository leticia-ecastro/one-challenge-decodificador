function criptografar() {
  let elementoHtml = document.getElementById("texto");
  let texto = elementoHtml.value;

  for (let i = 0; i < texto.length; i++) {
    const letra = texto.charCodeAt(i);
    if ((letra >= 33 && letra <= 96) || (letra >= 123 && letra <= 126)) {
      alert(
        "Digite apenas letras minúsculas, sem acentos, sem números e sem caracteres especiais!"
      );
      return;
    }
  }
  
  let textoCriptografado = texto
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  elementoHtml.value = textoCriptografado;
}

function descriptografar() {
  let elementoHtml = document.getElementById("texto");
  let texto = elementoHtml.value;
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  elementoHtml.value = textoDescriptografado;
}

function limparCampo() {
  let elementoHtml = document.getElementById("texto");
  elementoHtml.value = "";
}

function copiar() {
  let texto = document.getElementById("texto").value;
  navigator.clipboard.writeText(texto);
}
