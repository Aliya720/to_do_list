// to do list----------------------

const btn = document.querySelector(".btn") as HTMLButtonElement;
btn.addEventListener("click", addTask);


function addTask(): void {
    let input = document.querySelector(".type") as HTMLInputElement;
    let task: string = input.value;
    input.value = "";

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.querySelector(".tasklist") as HTMLUListElement;
    let li = document.createElement("li") as HTMLLIElement;
    li.appendChild(document.createTextNode(task));
    let btn1 = document.createElement("button") as HTMLButtonElement;
    btn1.className = "btn-close";
    let i = document.createElement("span") as HTMLSpanElement;
    i.className = "material-symbols-outlined";
    i.appendChild(document.createTextNode("close"));
    btn1.appendChild(i);
    li.appendChild(btn1) as HTMLButtonElement;
    taskList.appendChild(li) as HTMLLIElement;

    i!.addEventListener("click", () => {
        taskList.removeChild(li);
        console.log("clicked")
    });

}

// ------------------calculator-----------------

const result = document.querySelector("#display") as HTMLInputElement;
const input = document.querySelectorAll(".data");
const clr = document.querySelector("#clear") as HTMLInputElement;
const del = document.querySelector("#del") as HTMLInputElement;
const equal = document.querySelector("#equal") as HTMLInputElement;

input.forEach(item => {
    const data = item as HTMLInputElement;
    item?.addEventListener("click", () => {
        result.value += data.value;
    });
})
equal.addEventListener("click", () => {
    const output = eval(result.value);
    result.value = output;

})
clr.addEventListener("click", () => {
    result.value = "";
})
del.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
})


