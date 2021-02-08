
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

            /*Table*/
            var divContainerTable = document.createElement("div");
            divContainerTable.id = "containerTable";
            divContainerTable.className = "container-table";

            var table = document.createElement("table");
            table.id = "table";
            table.className = "table";

            divContainerTable.appendChild(table);
            divApp.appendChild(divContainerTable);

            function createTask(taskValue) {
                inputNewTask.value = "";
                var trFila = document.createElement("tr");
                var tdColumn1 = document.createElement("td");

                var checkBox = document.createElement("INPUT");
                checkBox.setAttribute("type", "checkbox");
                checkBox.className = "checkbox";
                checkBox.addEventListener("click", function () {
                    var tdParent = checkBox.parentNode;
                    var trParent = tdParent.parentNode;
                    if (checkBox.checked) {
                        trParent.style = "text-decoration: line-through";
                    } else {
                        trParent.style = "text-decoration: none";
                    }
                });

                tdColumn1.append(checkBox);

                var tdColumn2 = document.createElement("td");
                var tdColumn3 = document.createElement("td");

                var buttonDelete = document.createElement("BUTTON");
                buttonDelete.innerHTML = "Delete";
                buttonDelete.setAttribute("id", "buttonDelete");
                buttonDelete.setAttribute("class", "button-delete");

                buttonDelete.addEventListener("click", function (event) {
                    tdParentNodeBtn = event.target.parentNode;
                    showModal();
                });
                tdColumn2.append(taskValue);
                tdColumn3.append(buttonDelete);

                trFila.appendChild(tdColumn1);
                trFila.appendChild(tdColumn2);
                trFila.appendChild(tdColumn3);
                table.appendChild(trFila);
                
            }

            function createContainerElement(idParameter, classParameter) {
                var div = document.createElement("div");
                div.setAttribute("id", idParameter);
                div.setAttribute("class", classParameter);
                document.getElementById("app").appendChild(div);
            }

