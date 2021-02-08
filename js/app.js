
/*main div*/
var divApp = document.querySelector("#app");
divApp.className = "container";
/*Title*/
var divContainerTitle = document.createElement("div");
divContainerTitle.id = "containerTitle";
divContainerTitle.className = "container-title";

var h1Title = document.createElement("h1");
h1Title.id = "title";
h1Title.className = "title";
var textTitle = document.createTextNode("Todo App");

h1Title.appendChild(textTitle);
divApp.appendChild(divContainerTitle);
divContainerTitle.appendChild(h1Title);

/*Input and button add*/
var divContainerInputAndButton = document.createElement("div");
divContainerInputAndButton.id = "containerInput";
divContainerInputAndButton.className = "container-input";

var inputNewTask = document.createElement("input");
inputNewTask.id = "input";
inputNewTask.className = "input";
inputNewTask.type = "text";
inputNewTask.placeholder = "New task...";

inputNewTask.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        createTask(inputNewTask.value);
    }
});

var buttonAdd = document.createElement("button");
buttonAdd.id = "buttonAdd";
buttonAdd.className = "button-add";
buttonAdd.textContent = "Add";

buttonAdd.addEventListener("click", () => {
    if (inputNewTask.value === "") {
        alert("You must add text to the new task");
    } else if (inputNewTask.value.length < 5) {
        alert("Your task must be at least 5 chars");
    } else {
        createTask(inputNewTask.value);
    }
});

divContainerInputAndButton.appendChild(inputNewTask);
divContainerInputAndButton.appendChild(buttonAdd);

divApp.appendChild(divContainerInputAndButton);

