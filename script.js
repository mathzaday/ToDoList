const btnadd =document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa')
const tasklist = document.getElementById('tasklist')
const titulo = document.getElementById('titulo')

let nome = prompt("Qual o seu nome? ")
tarefa.focus()

if(nome==""){
    titulo.innerHTML = "Lista de tarefa genérica"
}
else{
    titulo.innerHTML =`Lista de tarefa: ${nome}`;
}

tarefa.addEventListener('keypress', function(e){
    if(e.key === 'Enter') criaTarefa()
});

// Acompanha o evento de clique do botão adicionar tarefa
btnadd.addEventListener("click",criaTarefa);

function criaTarefa(){

    if(tarefa.value == ""){
        alert("Digite uma tarefa antes de adicionar.")
    }
    else{

    const listItem =document.createElement('li');
    listItem.textContent = tarefa.value;
    tasklist.appendChild(listItem);
    tarefa.value = ''; 
    tarefa.focus();

    // Criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id ="remove";
    removeButton.textContent ="X"

    removeButton.addEventListener("click", function(){
        tasklist.removeChild(listItem)
    })

    // Criar botão de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id="conclui";
    concluirButton.textContent="✓"

    // Liste os itens
    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    concluirButton.addEventListener("click",function(){
        listItem.classList.toggle('completed');
    });
}
}