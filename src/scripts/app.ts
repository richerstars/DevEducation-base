import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { IResults, IObjArray } from '../interfaces/interface';
import domElements from '../domElements/domElements';
import '../style.css';
import 'regenerator-runtime/runtime';

Chart.register(...registerables);

let pageChart: Chart<'bar', number[], string | number>;
let dataApi: IResults;

const arrayObj: IObjArray = {
    jobsTitleArray: [],
};
const salarySet = new Set<number>();

export function getAllResults(results: IResults, optionValue: string): void {
    switch (true) {
    case (optionValue === 'specialities'):
        Object.values(results)
            .map((element) => {
                arrayObj.jobsTitleArray.push(element.title);
                salarySet.add(element.salary_min);
                salarySet.add(element.salary_max);
            });
        break;
    case (optionValue === 'category'):
        Object.values(results)
            .map((element) => {
                arrayObj.jobsTitleArray.push(element.category.label);
                salarySet.add(element.salary_min);
                salarySet.add(element.salary_max);
            });
        break;
    }

    renderItems(arrayObj.jobsTitleArray, Array.from(salarySet), optionValue);
}

function changeChart(e: Event) {
    pageChart.destroy();
    arrayObj.jobsTitleArray.length = 0;
    for (const item of (<HTMLSelectElement>e.target)) {
        if ((<HTMLOptionElement>item).selected) {
            getAllResults(dataApi, (<HTMLOptionElement>item).value);
        }
    }
}

export async function getApiData(): Promise<void> {
    try {
        const { data: { results } } = await axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=eb770bb2&app_key=967417b625ae1d9da46cf7bb0db75ec5`);
        dataApi = results;
        getAllResults(dataApi, 'category');
    } catch (err) {
        console.error('apiData', err);
    }
}

export function renderItems(jobsTitleArray: Array<string | number>, salarySet, optionValue: string): void {
    pageChart = new Chart((<HTMLCanvasElement><unknown>domElements.ctx), {
        type: 'bar',
        data: {
            labels: jobsTitleArray,
            datasets: [{
                label: `Salaries : ${optionValue}`,
                data: salarySet,
                backgroundColor: [
                    'rgba(50, 69, 240, 0.2)',
                    'rgba(160, 255, 112, 0.2)',
                    'rgba(240, 202, 65, 0.2)',
                    'rgba(235, 135, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(50, 69, 240, 1)',
                    'rgba(160, 255, 112, 1)',
                    'rgba(240, 202, 65, 1)',
                    'rgba(235, 135, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 4,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

document.addEventListener('DOMContentLoaded', getApiData);
domElements.selectorIdSelectData.addEventListener('click', changeChart);
