import {constants} from "./constants";
import axios from "axios";

export default class Gallery {
    index = 0;
    prev = 0;
    next = 1;
    toggler = false;

    constructor() {
        this.startGallery();
        this.pauseGallery = this.pauseGallery.bind(this);
        constants.buttons.addEventListener('click', this.pauseGallery);
    }

    async dogsTodos() {
        try {
            const response = await axios.get(`${constants.dogURL}`);
            this.data = response.data.message;
        } catch (error) {
            console.log(error);
        }
    }

    async startGallery() {
        await this.dogsTodos();
        this.render(this.data)
    }

    render(photo) {
        const interval = setInterval(() => {
            if (this.toggler) {
                clearInterval(interval);
                return;
            } else if (this.index >= 5) {
                this.index = 0;
            }
            constants.image.setAttribute('src', photo[this.index])
            this.index++;
        }, 2000);
    }

    pauseGallery(event) {
        switch (event.target.getAttribute('id')) {
            case 'pause':
                this.toggler = !this.toggler;
                if (!this.toggler) this.render(this.data);
                break;
            case 'prev':
                this.pagination(this.data, this.prev);
                break;
            case 'next':
                this.pagination(this.data, this.next);
                break;
        }
    }

    pagination(photo, index) {
        this.toggler = true;
        if (index >= 0 && index < 5) {
            this.index = index;
            this.prev = this.index - 1;
            this.next = this.index + 1;
            constants.image.setAttribute('src', photo[this.index])
        }
    }

}