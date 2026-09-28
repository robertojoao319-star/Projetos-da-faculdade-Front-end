document.getElementById("gerar").addEventListener("click", function() {
    const tamanho = Number(document.getElementById("tamanho").value);
    const caracteres = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()_+[]{}|;:,.<>?";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const indice = 
        Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    document.getElementById("senha").textContent = senha;
});