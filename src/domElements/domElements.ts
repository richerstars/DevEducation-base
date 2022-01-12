import { ISelectorsCss } from '../interfaces/interface';

const selectorsCss: ISelectorsCss = {
    idSelectData: 'selectData',
    idMyChart: 'myChart',
};

export default {
    selectorIdSelectData: <HTMLSelectElement>document.querySelector(`#${selectorsCss.idSelectData}`),
    ctx: <HTMLCanvasElement>document.querySelector(`#${selectorsCss.idMyChart}`),
};
