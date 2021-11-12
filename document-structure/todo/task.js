const taskAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const taskListStorage =
  JSON.parse(localStorage.getItem('taskListStorage')) || [];

const startRenderTask = (list) => {
  list.forEach((elem) => {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
	<div class="task__title">
	${elem}
</div>
<a href="#" class="task__remove">&times;</a>
</div>`;

    taskList.append(task);
  });
};

startRenderTask(taskListStorage);

const add = (event) => {
  event.preventDefault();

  if (!input.value.trim()) {
    return;
  }

  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
	<div class="task__title">
	${input.value}
</div>
<a href="#" class="task__remove">&times;</a>
</div>`;

  taskList.append(task);

  taskListStorage.push(input.value);
  localStorage.setItem('taskListStorage', JSON.stringify(taskListStorage));
  input.value = '';
};

const removeTask = (event) => {
  const target = event.target.closest('.task__remove');
  if (!target) {
    return;
  }

  const removeElement = target.closest('.task');
  const indexRemoveElement = [...taskList.querySelectorAll('.task')].findIndex(
    (task) => task === removeElement
  );

  taskListStorage.splice(indexRemoveElement, 1);
  localStorage.setItem('taskListStorage', JSON.stringify(taskListStorage));

  removeElement.remove();
};

taskAdd.addEventListener('click', add);
taskList.addEventListener('click', removeTask);
