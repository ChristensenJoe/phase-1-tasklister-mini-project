document.addEventListener("DOMContentLoaded", () => {
  
  let todoForm = document.querySelector("#create-task-form");

  todoForm.addEventListener("submit", formCallback);


  function formCallback(event) {
    event.preventDefault();
    let taskList = document.querySelector("#tasks");
    let task = document.createElement("li");
    let taskDelete = document.createElement('button');
    
    task.textContent = event.target["new-task-description"].value+'   ';
    
    taskDelete.textContent = 'x';
    taskDelete.addEventListener('click',deleteButtonCallback);

    task.appendChild(taskDelete);
    
    taskList.prepend(task);
    event.target["new-task-description"].value = "";
  }
  function deleteButtonCallback(event){
    let task = event.target.parentNode;
    task.remove()
  }


});