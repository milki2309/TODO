const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addBtnEl = document.querySelector(".task__add");

addBtnEl.addEventListener("click", function () {
  const taskName = prompt("введите название задачи");

  const task = {
    name: taskName,
    isDone: false,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks(tasks);

  console.log(tasks);
});
function renderTasks(tasks) {
  const tasksEl = document.querySelector(".tasks");
  tasksEl.replaceChildren();

  tasks.forEach((task, i) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const checkboxEl = document.createElement("input");
    checkboxEl.classList.add("task__checkbox");
    checkboxEl.type = "checkbox";

    checkboxEl.addEventListener("click", () => {
      if (checkboxEl.checked == true) {
        taskName.classList.add("done");
        task.isDone = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      } else {
        taskName.classList.remove("done");
        task.isDone = false;
      }
    });

    const taskName = document.createElement("h3");
    taskName.classList.add("task__name");

    taskName.textContent = task.name;

    if (task.isDone == true) {
      checkboxEl.checked = true;
      taskName.classList.add("done");
    }

    const delBtnEl = document.createElement("img");
    delBtnEl.classList.add("task__del");
    delBtnEl.src = "./korzina.png";

    delBtnEl.addEventListener("click", (event) => {
      const delTaskEl = event.target.closest(".task");
      tasks.splice(1, i);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      delTaskEl.remove;
    });

    taskEl.append(checkboxEl);
    taskEl.append(taskName);
    taskEl.append(delBtnEl);

    const tasksEl = document.querySelector(".tasks");
    tasksEl.append(taskEl);
  });
}
const searchTaskEl = document.querySelector(".searchTask");

searchTaskEl.addEventListener("input", () => {
  const searchValue = searchTaskEl.value.toLowerCase();

  const searchedTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().startsWith(searchValue) ||
      task.name.toLowerCase().includes(searchValue),
  );

  renderTasks(searchedTasks);
});

const sortTasksEl = document.querySelector(".sortTasks");
console.log(sortTasksEl);

sortTasksEl.addEventListener("change", () => {
  console.log("Тут");
  const completedTask = tasks.filter((task) => task.isDone == true);
  console.log(completedTask);
  const notCompletedTask = tasks.filter((task) => task.isDone == false);
  console.log(notCompletedTask);

  if (sortTasksEl.value == "Completed") {
    renderTasks(completedTask);
  } else if (sortTasksEl.value == "notCompleted") {
    renderTasks(notCompletedTask);
  } else {
    renderTasks(tasks);
    sortTasksEl.value = "ALL";
  }
});
renderTasks(tasks);
