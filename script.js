//Definir constantes para uso no código
const btnadd =document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa')
const tasklist = document.getElementById('tasklist')
const titulo = document.getElementById('titulo')

let nome = prompt("Qual o seu nome?")
if(nome==""){
    titulo.innerHTML = "Lista de tarefa"
}
else{
titulo.innerHTML = `Lista de tarefa: ${nome}`;
}
// Acompanha o evento de clique do botão adicionar tarefa
btnadd.addEventListener("click", criaTarefa);
tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') criaTarefa();
});

function criaTarefa(){
    const listItem =document.createElement('li');
    listItem.textContent = tarefa.value;
    tasklist.appendChild(listItem);


    //Criar o botão de deletar a tarefa
    const removeButton = document.createElement('button');
    removeButton.id ="remove";
    removeButton.textContent ="X"
    listItem.appendChild(removeButton);

    removeButton.addEventListener("click", function(){
        tasklist.removeChild(listItem)
    })

    //Criar o botão de concluir a tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id="conclui";
    concluirButton.textContent="✓"
    // listItem.appendChild(concluirButton);

    
     let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem');
    listItem.appendChild(buttonsItem)
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    concluirButton.addEventListener("click",function(){
        listItem.classList.toggle('completed');
    })

    tarefa.value = "";

}