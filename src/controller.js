import { Model } from './model';
import { View } from './view';

export class Controller {
    constructor() {
        this.actionTodo = this.actionTodo.bind(this);
        this.addTasks = this.addTasks.bind(this);
        this.editBtn = this.editBtn.bind(this);
        this.submit = this.submit.bind(this);
        this.view = new View(this);
        this.model = new Model(this.view);
    }
    actionTodo(event) {
        let element = event.target;
        if (element.classList.contains('todoDelete')) {
            const todoId = Number(element.parentNode.dataset.id);
            this.model.deleteTask(todoId);
            return;
        } else if (element.classList.contains('todoEdit')) {
            this.view.showEditBtn(element);
            return;
        }
        element = element.classList.contains('listTemplate') ? element : element.parentNode;
        if (!element.classList.contains('listTemplate')) return;
        const todoId = Number(element.dataset.id);
        this.model.checkedTask(todoId);
    }
    addTasks() {
        const title = this.view.elements.input.value;
        if (title.length === 0) return;
        const todo = { title, completed: false };
        this.view.elements.input.value = '';
        this.model.addTask(todo);
    }
    editBtn() {
        const title = this.view.elements.input.value;
        if (title.length !== 0) {
            const todoId = Number(this.view.currentEditTask.dataset.id);
            this.view.elements.input.value = '';
            this.model.editTask(todoId, title);
        }
        this.view.currentEditTask = null;
        this.view.switcher();
    }
    submit(event) {
        event.preventDefault();
        if (!this.view.elements.addBtn.classList.contains('hide_btn')) this.addTasks()
        else if (!this.view.elements.editBtn.classList.contains('hide_btn')) this.editBtn();
    }
}