const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(){
  const list = document.querySelector("ul");
  list.innerHTML = ""
  for(let i = 0; i < tasks.length; i++){
    let task = tasks[i];
    const taskItem = createTaskItem(task)
    list.appendChild(taskItem)
  }
}

function createTaskItem(task){

    const listItem = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const paragraph = document.createElement("p");
    const button = document.createElement("button");

    button.addEventListener("click", function (event) {
      const indice = tasks.indexOf(task);
      tasks.splice(indice, 1);
      renderElements();
    })

    listItem.classList.add("task__item");
    div.classList.add("task-info__container");
    span.classList.add("task-type");
    button.classList.add("task__button--remove-task");
    paragraph.innerText = task.title;
    span.innerText = "•";

    if(task.type == "Urgente"){
      span.classList.add("span-urgent");
    } else if (task.type == "Importante"){
      span.classList.add("span-important");
    } else {
      span.classList.add("span-normal");
    }

    div.appendChild(span);
    div.appendChild(paragraph);
    listItem.appendChild(div);
    listItem.appendChild(button);

    return listItem
}

renderElements();

const form = document.querySelector(".form__container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const title = document.querySelector(".form__input--text");
  const type = document.querySelector(".form__input--priority");

  const newTask = {
    title: title.value,
    type: type.value
  }

  tasks.push(newTask);

  renderElements();

});