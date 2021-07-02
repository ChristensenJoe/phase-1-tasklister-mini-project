document.addEventListener("DOMContentLoaded", () => {
  
  let todoForm = document.querySelector("#create-task-form");

  todoForm.addEventListener("submit", formCallback);


  function formCallback(event) {
    event.preventDefault();
    let taskList = document.querySelector("#tasks");
    let task = document.createElement("li");
    task.textContent = event.target["new-task-description"].value;
    taskList.prepend(task);
    event.target["new-task-description"].value = "";
  }
});