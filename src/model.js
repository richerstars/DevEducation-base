import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/todos';

export class Model {
    constructor(view) {
        this.view = view;
        this.data = [];
        this.axiosTodos = this.axiosTodos.bind(this);
        this.addTask = this.addTask.bind(this);
        this.checkedTask = this.checkedTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.axiosTodos();
    }
    async axiosTodos() {
        try {
            const response = await axios.get(`${URL}?_limit=3`);
            this.data = response.data;
            this.view.renderElement(this.data);
        } catch (error) {
            console.log(error);
        }
    }
    async addTask(todo) {
        try {
            const response = await axios.post(URL, todo);
            if (200 <= response.status && response.status < 300) {
                if (response.data.id) this.data.push(response.data);
            }
            this.view.renderElement(this.data);
        } catch (error) {
            console.log(error);
        }
    }
    async checkedTask(id) {
        try {
            let todo = this.data.find(todo => todo.id === id);
            const editTodo = { id: todo.id, title: todo.title, completed: !todo.completed };
            const response = await axios.put(`${URL}/${id}`, editTodo);
            if (200 <= response.status && response.status < 300) {
                const data = response.data;
                if (data.id) todo.completed = data.completed;
            }
            this.view.renderElement(this.data);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteTask(id) {
        try {
            const response = await axios.delete(`${URL}/${id}`);
            if (200 <= response.status && response.status < 300) {
                let index = this.data.findIndex(todo => todo.id === id);
                this.data.splice(index, 1);
            }
            this.view.renderElement(this.data);
        } catch (error) {
            console.log(error);
        }
    }
    async editTask(id, title) {
        try {
            let todo = this.data.find(todo => todo.id === id);
            const editTodo = { id: todo.id, title, completed: todo.completed };
            const response = await axios.put(`${URL}/${id}`, editTodo);
            if (200 <= response.status && response.status < 300) {
                const data = response.data;
                if (data.id) todo.title = data.title;
            }
            this.view.renderElement(this.data);
        } catch (error) {
            console.log(error);
        }
    }
}