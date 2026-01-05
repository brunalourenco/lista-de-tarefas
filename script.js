// selecionar elementos que você deseja interagir no JavaScript

const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li)");
    li.textContent = input.value;

    // adiciona um botao para remover tarefa
    const removerBotao = document.createElement("button"); // cria o botao
    removerBotao.textContent = "Remover"; //adiciona texto ao botao criado

    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    //limpa o input após inserir valor no input
    input.value = "";
  } else {
    alert("Por favor, insira uma tarefa.");
  }
}
