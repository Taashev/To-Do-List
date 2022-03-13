// import
import {Task} from './Task.js';
import {TaskAddValidator} from './TaskAddValidator.js';


// variables
const addTaskElement = document.querySelector('.add-task');
const addTaskText = document.querySelector('.add-task__text');
const addTaskButton = document.querySelector('.add-task__button');


// reset add text
const resetAddText = () => {
  addTaskText.value = '';
};

// handle key add task
const handleKeyAddTask = (event) => {
  if(event.key === 'Enter') {
    const task = createTask(addTaskText.value);
    addTask(task);

    resetAddText();
    validator.resetValidation();
  };
};


// handle add task
const handleAddTaskButton = () => {
  const task = createTask(addTaskText.value);
  addTask(task);

  resetAddText();
  validator.resetValidation();
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
  const task = new Task('.task-template', text, handleTaskCopy);
  return task.renderTask();
};

// add task
const addTask = (task) => {
  const taskList = document.querySelector('.task-list');
  taskList.append(task);
};


// validator
const validator = new TaskAddValidator(addTaskElement, handleKeyAddTask);
validator.enableValidation();
