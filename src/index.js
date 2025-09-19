const input = document.getElementById("new-task-description")
const taskToDo = document.getElementById("tasks")
const form = document.getElementById("create-task-form")

const createNewTask = () => {
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const task = input.value
    if (task !== "") {
      const li = document.createElement("li")
      li.textContent = task

      const removeBtn = document.createElement("button")
      removeBtn.style.marginLeft = "5px"
      removeBtn.textContent = "X"
      removeBtn.addEventListener("click", function() {
        li.remove()
      })

      li.appendChild(removeBtn)

      taskToDo.appendChild(li)
      input.value = ""
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  createNewTask()
});