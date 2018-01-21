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
$(document).ready(function() {
    $(".cancel-button").click(function() {
        $(".today-input").hide();
        let taskInput1 = document.getElementById("inputTask");
        taskInput1.value = "";
        let dateInput1 = document.getElementById("schedule-inbox");
        dateInput1.value = "";
        $(".inbox-input").hide();
        let taskInput2 = document.getElementById("inputTaskToday");
        taskInput2.value = "";
        let dateInput2 = document.getElementById("schedule-today");
        dateInput2.value = "";
        $(".sevendays-input").hide();
        let taskInput3 = document.getElementById("sevendaysInput");
        taskInput3.value = "";
        let dateInput3 = document.getElementById("schedule-sevendays");
        dateInput3.value = "";

    });
});

const taskInput = document.getElementById("inputTask");
const incompleteTasks = document.getElementsByClassName('incomplete-task-list');
const createNewTaskElement = function(taskString, dateOfTask) {

    var listItem = document.createElement("li");
    listItem.className = "list-item";
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "input-checkbox";
    var label = document.createElement("label");
    var labelDate = document.createElement("label");
    labelDate.className = "date-string";
    labelDate.innerText = dateOfTask;
    label.innerText = taskString;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(labelDate)
    return listItem;
}
const addTask = function() {
    let taskInput = document.getElementById("inputTask");
    let dateInput = document.getElementById("schedule-inbox");
    let listItem = createNewTaskElement(taskInput.value, dateInput.value);
    let incompleteTasks = document.getElementById('incomplete-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
    dateInput.value = "";
}
const addTaskToday = function() {
    let taskInput = document.getElementById("inputTaskToday");
    let dateInput = document.getElementById("schedule-today");
    let listItem = createNewTaskElement(taskInput.value, dateInput.value);
    let incompleteTasks = document.getElementById('today-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
    dateInput.value = "";
}
const addTaskSevenDays = function() {
    let taskInput = document.getElementById("sevendaysInput");
    let dateInput = document.getElementById("schedule-sevendays");
    let listItem = createNewTaskElement(taskInput.value, dateInput.value);
    let incompleteTasks = document.getElementById('sevendays-task-list');
    incompleteTasks.appendChild(listItem);
    taskInput.value = "";
    dateInput.value = "";
}

// function onCancel() {
//     let taskInput = document.getElementById("inputTask");
//     taskInput.value = "";
//     let dateInput = document.getElementById("schedule-inbox");
//     dateInput.value = " ";
// }


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