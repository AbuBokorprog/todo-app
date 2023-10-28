import "./style.css";

const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("taskInput") as HTMLInputElement;
// task container/ output
const container = document.getElementById("taskContainer") as HTMLDivElement;

type TODO = {
  task: string;
  isComplete: boolean;
  id: string;
};

const todos: Array<TODO> = [];

form.onsubmit = (e) => {
  e.preventDefault();
  //   const task = input.value;
  //   console.log(task);
  const todo: TODO = {
    task: input.value,
    isComplete: false,
    id: String(Math.random() * 1000),
  };
  todos.unshift(todo);
  input.value = "";
  renderTask(todos);
};

const create = (task: string, isComplete: boolean, id: string) => {
  //   console.log(task, isComplete, id);
  //   container.innerHTML = `
  //     <div class="flex justify-between items-center gap-4">
  //     <input type="checkbox" name="" >
  //     <p>${task}</p>
  //     <button>X</button>
  //     </div>
  //     `;

  const div: HTMLDivElement = document.createElement("div");
  div.className = "flex justify-between items-center gap-4";
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = `${task}`;
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "checkbox checkbox-secondary";
  const delBtn: HTMLButtonElement = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "btn btn-circle btn-error";
  div.append(checkbox, paragraph, delBtn);
  container.append(div);
};

const renderTask = (todos: TODO[]) => {
  container.innerText = "";
  todos.forEach((item) => {
    create(item.task, item.isComplete, item.id);
  });
};
