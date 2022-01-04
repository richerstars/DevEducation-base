import '../style.css';

const todos: NodeListOf<Element> = document.querySelectorAll('.todo');
const allStatus: NodeListOf<Element> = document.querySelectorAll('.status');
const closeModal: HTMLElement = document.querySelector('.close-modal');
const overlay: HTMLElement = document.getElementById('overlay');
const activeHover: HTMLElement = document.querySelector('.modal');
const headerTodo: HTMLElement = document.querySelector('#no_status');
const todoSubmit: HTMLElement = document.getElementById('todo_submit');
const closeBtns: HTMLElement = document.querySelector('.close');
const addBtn: HTMLElement = document.querySelector('#add_btn');
let draggableTodo = null;

function dragStart(): void {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd(): void {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = 'block';
    }, 0);
}

function dragOver(e): void {
    e.preventDefault();
}

function dragEnter(): void {
    this.style.border = '1px dashed #ccc';
}

function dragLeave(): void {
    this.style.border = 'none';
}

function dragDrop(): void {
    this.style.border = 'none';
    this.appendChild(draggableTodo);
}

todos.forEach((todo: HTMLElement) => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
});
allStatus.forEach((status: HTMLElement) => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
});

function addTodo(): void {
    document.querySelector(addBtn.dataset.targetModal).classList.add('active');
    overlay.classList.add('active');
}

function closeAddTodo() {
    const modal: HTMLElement = closeModal.closest('.modal');
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

window.onclick = (event: MouseEvent): void => {
    if (event.target === overlay) {
        const modals: NodeListOf<Element> = document.querySelectorAll('.modal');
        modals.forEach((modal: HTMLElement) => modal.classList.remove('active'));
        overlay.classList.remove('active');
    }
};

function createTodo(): void {
    const todoDiv: HTMLElement = document.createElement('div');
    const inputVal: string = (document.getElementById('todo_input') as HTMLInputElement).value;
    const txt: Text = document.createTextNode(inputVal);
    todoDiv.appendChild(txt);
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('draggable', 'true');
    const span:HTMLSpanElement = document.createElement('span');
    const spanTxt: Text = document.createTextNode('\u00D7');
    span.classList.add('close');
    span.appendChild(spanTxt);
    todoDiv.appendChild(span);
    headerTodo.appendChild(todoDiv);
    span.addEventListener('click', () => {
        span.parentElement.style.display = 'none';
    });
    todoDiv.addEventListener('dragstart', dragStart);
    todoDiv.addEventListener('dragend', dragEnd);
    (document.getElementById('todo_input') as HTMLInputElement).value = '';
    activeHover.classList.remove('active');
    overlay.classList.remove('active');
}

function closeExistTodo(): void {
    closeBtns.parentElement.style.display = 'none';
}

todoSubmit.addEventListener('click', createTodo);
addBtn.addEventListener('click', addTodo);
closeModal.addEventListener('click', closeAddTodo);
closeBtns.addEventListener('click', closeExistTodo);
