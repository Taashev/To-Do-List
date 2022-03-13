// import
import {Task} from './Task.js';
import {TaskAddValidator} from './TaskAddValidator.js';


// variables
const addTaskElement = document.querySelector('.add-task');
const addTaskText = document.querySelector('.add-task__text');
const addTaskButton = document.querySelector('.add-task__button');

const taskList = document.querySelector('.task-list');

const banerNoTask = document.querySelector('.no-task');


const toggleBanerNoTask = () => {
  if (taskList.children.length === 0) {
    banerNoTask.classList.add('no-task_visible');
  } else {
    banerNoTask.classList.remove('no-task_visible');
  }
};
toggleBanerNoTask();


// reset add text
const resetAddText = () => {
  addTaskText.value = '';
};

// handle add task
const handleAddTaskButton = () => {
  const task = createTask(addTaskText.value);
  addTask(task);

  resetAddText();
  validator.resetValidation();
  toggleBanerNoTask();
};

// handle key add task
const handleKeyAddTask = (event) => {
  if(event.key === 'Enter') {
    handleAddTaskButton();
  };
};

// set event listener add button
const setEventListenerAddTask = () => {
  addTaskButton.addEventListener('click', handleAddTaskButton);
};
setEventListenerAddTask();


// handle task copy
const handleTaskCopy = (text) => {
  const task = createTask(text);
  addTask(task);
};

// create task
const createTask = (text) => {
  const task = new Task('.task-template', text, handleTaskCopy, toggleBanerNoTask);
  return task.renderTask();
};

// add task
const addTask = (task) => {
  taskList.append(task);
};


// validator
const validator = new TaskAddValidator(addTaskElement, handleKeyAddTask);
validator.enableValidation();
