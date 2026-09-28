const input = document.getElementById("tarefa");
const button = document.getElementById("adicionar");
const lista = document.getElementById("lista");

button.addEventListener("click", function(){
    const texto = input.value.trim();
    if (texto === ""){
        alert("Digite uma tarefa!");
        return;
    }
    
    const item = document.createElement("ul");
    item.innerHTML = `
    <span>${texto}</span>
    <button class="remover">Remover</button>
    `;
    lista.appendChild(item);
    input.value = "";
    item.querySelector(".remover").addEventListener("click", function(){
        item.remove();
    });
});