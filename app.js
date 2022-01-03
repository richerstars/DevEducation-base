const myNodelist = document.getElementsByTagName("li");
const close = document.getElementsByClassName("close");
const list = document.querySelector('ul');
const adder = document.querySelector('button');
list.addEventListener('click', checkedFunc, false);
adder.addEventListener('click', newElement);
const input = document.getElementById("enterInput")
let myRequest = new Request("https://jsonplaceholder.typicode.com/todos?_limit=10");

getApi();
creatorList();
deleter();


/* async function getApi(){
    try{
        if(!myRequest.ok){
            throw new Error('Ответ сети был не ok.');
        }
    const data = await myRequest.json();
        data.forEach(el => {
            const info = el.title;
            renderList(info);
        });      
    }
    catch(error){
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
} */
function getApi(){
    fetch(myRequest)
    .then(function(response){
        return response.json();
    })
    .then((data) =>{
        data.forEach(el => {
            const info = el.title;
            renderList(info);
          })
    })
}
function deleteApi(numElem){
    const urlServer = 'https://jsonplaceholder.typicode.com/todos';
    console.log(numElem);
fetch(`${urlServer}/${numElem}`,{method:"DELETE",}).then(res => res.json()).then(data =>{
if(numElem == urlServer.title) {
    
}
} )
}
function newElement() {
    const inputValue = input.value;
  renderList(inputValue);
}
function closerBtn(){
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    return span;
}
function checkedFunc(elem) {
    if (elem.target.tagName === 'LI') {
        elem.target.classList.toggle('checked');
    }
}
function deleter() {
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
            deleteApi(div.innerText);
        }
    }
}
function creatorList() {
    for (let i = 0; i < myNodelist.length; i++) {
        
        myNodelist[i].appendChild(closerBtn());
    }
}
input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        newElement();
    }
});
function renderList(data){
    const li = document.createElement("li");
    const ourText = document.createTextNode(data);
    li.appendChild(ourText);
    if (data === '') {
        alert("Ваша задача пустая!");
    } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("enterInput").value = "";
    li.appendChild(closerBtn());
    deleter();
}
