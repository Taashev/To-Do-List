class TaskAddValidator {
  constructor(addTaskSelector, handleKeyAddTask) {
    this._addTaskSelector = addTaskSelector;
    this._handleKeyAddTask = handleKeyAddTask;
  }

  _showError() {
    this._errorElement.classList.add("add-task__error_visible");
  }
  _hideError() {
    this._errorElement.classList.remove("add-task__error_visible");
  }

  _buttonAddTaskInvalid() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add("add-task__button_type_invalid");
  }
  _buttonAddTaskValid() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove("add-task__button_type_invalid");
  }

  _toggleButtonAddTask() {
    if (!this._inputElement.validity.valid) {
      this._buttonAddTaskInvalid();
    } else {
      this._buttonAddTaskValid();
    }
  }

  _inputInvalid() {
    this._inputElement.classList.add("add-task__text_type_invalid");
    this._inputElement.removeEventListener("keydown", this._handleKeyAddTask);
  }
  _inputValid() {
    this._inputElement.classList.remove("add-task__text_type_invalid");
    this._inputElement.addEventListener("keydown", this._handleKeyAddTask);
  }

  _checkValidation() {
    if (!this._inputElement.validity.valid) {
      this._inputInvalid();
      this._showError();
    } else {
      this._inputValid();
      this._hideError();
    }
  }

  _setEventListener() {
    this._checkValidation();
    this._toggleButtonAddTask();

    this._inputElement.addEventListener("input", () => {
      this._checkValidation();
      this._toggleButtonAddTask();
    });
  }

  enableValidation() {
    this._element = this._addTaskSelector;
    this._inputElement = this._element.querySelector(".add-task__text");
    this._buttonElement = this._element.querySelector(".add-task__button");
    this._errorElement = this._element.querySelector(".add-task__error");

    this._setEventListener();
  }

  resetValidation() {
    this._toggleButtonAddTask();
    this._checkValidation();
  }
}

export { TaskAddValidator };
