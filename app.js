$(document).ready(function() {
    $(".filter").click(function() {
        $(".filters").show();
        $(".projects").hide();
    });
});
$(document).ready(function() {
    $(".project").click(function() {
        $(".filters").hide();
        $(".projects").show();
    });
});
$(document).ready(function() {
    $(".inbox-item").click(function() {
        $(".inbox").show();
        $(".today").hide();
        $(".plus-seven-days").hide();
    });
});
$(document).ready(function() {
    $(".calendar-item1").click(function() {
        $(".today").show();
        $(".plus-seven-days").hide();
        $(".inbox").hide();
    });
});
$(document).ready(function() {
    $(".calendar-item2").click(function() {
        $(".plus-seven-days").show();
        $(".inbox").hide();
        $(".today").hide();
    });
});
$(document).ready(function() {
    $(".addtask-label-inbox").click(function() {
        $(".inbox-input").show();
        $(".today-input").hide();
        $(".sevendays-input").hide();
    });
});
$(document).ready(function() {
    $(".addtask-label-today").click(function() {
        $(".today-input").show();
        $(".inbox-input").hide();
        $(".sevendays-input").hide();
    });
});
$(document).ready(function() {
    $(".addtask-label-sevendays").click(function() {
        $(".sevendays-input").show();
        $(".today-input").hide();
        $(".inbox-input").hide();
    });
});
$(document).ready(function() {
    $("add-task-button").click(function() {
        $(".add-task-button").css("outline", "none");
    });
});

const taskInput = document.getElementById("inputTask");
const incompleteTasks = document.getElementsByClassName('incomplete-task-list');
const createNewTaskElement = function(taskString) {

    var listItem = document.createElement("li");
    listItem.className = "list-item";
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "input-checkbox";
    var label = document.createElement("label");
    label.innerText = taskString;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}
const addTask = function() {
    let taskInput = document.getElementById("inputTask");
    let listItem = createNewTaskElement(taskInput.value);
    let incompleteTasks = document.getElementById('incomplete-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
}
const addTaskToday = function() {
    let taskInput = document.getElementById("inputTaskToday");
    let listItem = createNewTaskElement(taskInput.value);
    let incompleteTasks = document.getElementById('today-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
}
const addTaskSevenDays = function() {
    let taskInput = document.getElementById("sevendaysInput");
    let listItem = createNewTaskElement(taskInput.value);
    let incompleteTasks = document.getElementById('sevendays-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
}

// function addTask() {
//     const addedTask = document.getElementById('inputTask').value;
//     const checkIcon = '<i class="fa fa-check fa-2x" aria-hidden="true"></i>';
//     var para = document.createElement("P");
//     const div = document.createElement("DIV");
//     div.className = "task"
//     var text = document.createTextNode(addedTask); // Create a text node
//     para.appendChild(text); // Append the text to <p>
//     div.appendChild(checkIcon);
//     document.appendChild(para);
//     document.getElementsByClassName('task-list').innerHTML = div;
// }