class Task {
  constructor(taskSelector, text, handleTaskCopy, toggleBanerNoTask) {
    this._text = text;
    this._taskSelector = taskSelector;
    this._handleTaskCopy = handleTaskCopy;
    this._toggleBanerNoTask = toggleBanerNoTask;
  };

  _handleTaskElement() {
    const task = document
    .querySelector(this._taskSelector)
    .content
    .querySelector('.task')
    .cloneNode(true);

    return task;
  };

  _handleTaskDelete() {
    this._buttonElementDelete.closest('.task').remove();
    this._toggleBanerNoTask();
  };

  _setEventListener() {
    this._buttonElementDelete.addEventListener('click', () => {
      this._handleTaskDelete();
    });

    this._buttonElementCopy.addEventListener('click', () => {
      this._handleTaskCopy(this._elementText.textContent);
    });
  };

  renderTask() {
    this._element = this._handleTaskElement();
    this._elementText = this._element.querySelector('.task__text')
    this._buttonElementDelete = this._element.querySelector('.task__button_type_delete');
    this._buttonElementCopy = this._element.querySelector('.task__button_type_copy');

    this._elementText.textContent = this._text;

    this._setEventListener();

    return this._element;
  };
};


// export
export {Task};
