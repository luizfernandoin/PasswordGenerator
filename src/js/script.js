const slideValue = document.querySelector("span");
const inputSlider = document.querySelector(".slider");
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
});

const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const punctuation = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// Função para gerar caracteres aleatórios
function gerarCaractereAleatorio(caracteres) {
  const indice = Math.floor(Math.random() * caracteres.length);
  return caracteres.charAt(indice);
}

// Exemplo de uso para gerar uma senha aleatória de 12 caracteres
function gerarSenha() {
    let caracteresPermitidos = ''
    const tamanho = parseInt(slideValue.textContent)

    const uppercase = document.querySelector("#uppercase")
    if (uppercase.checked != false || lowercase.checked != false || numbers.checked != false || symbols.checked != false){
        if (uppercase.checked == true) {
            caracteresPermitidos += ascii_uppercase;
        }
        const lowercase = document.querySelector("#lowercase")
        if (lowercase.checked == true) {
            caracteresPermitidos += ascii_lowercase;
        }
        const numbers = document.querySelector("#numbers")
        if (numbers.checked == true) {
            caracteresPermitidos += digits;
        }
        const symbols = document.querySelector("#symbols")
        if (symbols.checked == true) {
            caracteresPermitidos += punctuation;
        }
    }else {
        caracteresPermitidos = ascii_uppercase + ascii_lowercase + digits + punctuation;
    }
    
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        senha += gerarCaractereAleatorio(caracteresPermitidos);
    }

    document.querySelector(".password").classList.add("show")
    document.querySelector(".value").textContent = senha;
}

function copyToClipboard() {
    const texto = document.querySelector(".value").textContent;

    navigator.clipboard.writeText(texto).then(() => {
        swal.fire({
            position: 'center',
            icon: 'success',
            title: `Copied to Clipboard`,
        })
    })
}

document.querySelector('.btn').addEventListener('click', gerarSenha);
document.querySelector('.password').addEventListener('click', copyToClipboard);