document.addEventListener("DOMContentLoaded", () => {
  let priority = {
    HIGH: "red",
    MEDIUM: "#E1C16E",
    LOW: "green"
  };

  let todoForm = document.querySelector("#create-task-form");

  createPriorityDropdown();


  todoForm.addEventListener("submit", formCallback);


  function formCallback(event) {
    event.preventDefault();
    let taskList = document.querySelector("#tasks");
    let task = document.createElement("li");
    let taskDelete = document.createElement('button');
    
    task.textContent = event.target["new-task-description"].value+'   ';
    task.style.color = priority[event.target["dropdown"].value];
    
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

  function createPriorityDropdown() {
    let dropdown = document.createElement("select");
    let highPriority = document.createElement("option");
    let mediumPriority = document.createElement("option");
    let lowPriority = document.createElement("option");
    let form = document.querySelector("#create-task-form");
    dropdown.id = "dropdown";
    highPriority.textContent = "HIGH";
    mediumPriority.textContent = "MEDIUM";
    lowPriority.textContent = "LOW";
    dropdown.appendChild(highPriority);
    dropdown.appendChild(mediumPriority);
    dropdown.appendChild(lowPriority);
    form.appendChild(dropdown);
  }

});