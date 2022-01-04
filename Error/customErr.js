class customErr {
    constructor(message, status) {
        this.message = message;
        this.name = "customErr";
        this.status = status;
    }
    stack = () => {
        this.constructor;
    };
}

module.exports = {
    customErr
}
