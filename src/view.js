export class View {
    constructor(controller) {
        this.controller = controller;
        this.currentEditTask = null;
        this.elements = {
            form: document.getElementById('addTask'),
            input: document.getElementById('enterInput'),
            addBtn: document.getElementById('addBtn'),
            editBtn: document.getElementById('editBtn'),
            ul: document.getElementById('myUl'),
            template: document.getElementById('template').innerHTML,
        }
        this.renderElement = this.renderElement.bind(this);
        this.renderText = this.renderText.bind(this);
        this.getNewElement = this.getNewElement.bind(this);
        this.showEditBtn = this.showEditBtn.bind(this);
        this.elements.form.addEventListener('submit', this.controller.submit);
        this.elements.ul.addEventListener('click', this.controller.actionTodo);
    }
    showEditBtn(element) {
        element = element.parentNode;
        this.elements.input.value = element.querySelector('.todoCheck').textContent;
        this.currentEditTask = element;
        if (this.elements.editBtn.classList.contains('hide_btn')) this.switcher();
    }
    switcher() {
        this.elements.addBtn.classList.toggle('hide_btn');
        this.elements.editBtn.classList.toggle('hide_btn');
    }
    renderElement(data) {
        this.elements.ul.innerHTML = '';
        data.forEach(this.renderText);
        this.elements.input.focus();
    }
    renderText({ id, title, completed } = {}) {
        this.elements.ul.append(this.getNewElement(id, title, completed));
    }
    getNewElement(todoId, todoTitle, completed) {
        const html = this.elements.template
            .replace('{{todo-id}}', todoId)
            .replace('{{todo-title}}', todoTitle);
        const todo = this.getTextTemplate(html);
        if (completed) todo.classList.add('checked');
        return todo;
    }
    getTextTemplate(html) {
        const template = document.createElement("template");
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
}