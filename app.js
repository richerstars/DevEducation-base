const massive = [];

const getRandom = () => {

    const min = Number(document.getElementById("minNumber").value);
    const max = Number(document.getElementById('maxNumber').value);
    const output = document.querySelector('output');

    if (massive.length === 0) {
        for (let i = min; i <= max; i++) {
            massive.push(i);
        }
    }
    const res = Math.floor(Math.random() * (massive.length - Math.abs(massive[0]) + 1));

    if (Number(min) > Number(max)) {
        output.value = "Mistake!"
        return;
    }
    else {
        output.value = `Полученно число: ${massive[res]} `;
        massive.splice(res, 1)
    }
    if (massive.length === 0) {
        document.querySelector('output').value = 'Все числа перебраны';
        document.getElementById('generate').setAttribute('disabled', true);

    }
}
const switchAble = () => {
    const btn = document.getElementById('generate');
    if (document.getElementById("minNumber").value.length != 0 && document.getElementById('maxNumber').value.length != 0) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', true);
    }
}
