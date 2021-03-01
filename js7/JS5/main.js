'use strict'

let taskList = [];

function Task(title, done = false){
    this.title = title;
    this.done = done;
}

function drawTasks() {
    const $taskList = document.querySelector('#task-list');
    $taskList.textContent = '';
    taskList.forEach(function(task, i) {
        drawTask(task, i);
    })

    console.log(taskList)
}


function drawTask(task, id){
    const $taskList = document.querySelector('#task-list');
    const html = `<div id="item-${id}" class="task-item ${task.done ? 'done' : ''}">
            <input type="checkbox" ${task.done ? 'checked="checked"' : ''}>
            <p class="task-item__title">${task.title}</p>
            <button data-id="${id}" class="task-item__btn">delete</button>
        </div>`
        $taskList.insertAdjacentHTML('beforeend', html);

        const $item = $taskList.querySelector(`#item-${id}`);
        const $chBox = $item.querySelector('input');

        $chBox.addEventListener('click', function() {
            task.done = !task.done;
            drawTasks();
        })
}

const $addTaskBtn = document.querySelector('#add-task-btn');
const $newTaskInput = document.querySelector('#new-task');

$addTaskBtn.addEventListener('click', function() {
    taskList.push(new Task($newTaskInput.value));
    $newTaskInput.value = '';
    drawTasks();
});

const $taskList = document.querySelector('#task-list');


$taskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);
        taskList = taskList.filter(function (task, i) {
            return i !== index
        });
        drawTasks();
    }
})

drawTasks();