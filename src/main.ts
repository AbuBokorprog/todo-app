import "./style.css";

const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("taskInput") as HTMLInputElement;
const container = document.getElementById("taskContainer") as HTMLDivElement;

type TODO = {
  task: string;
  isComplete: boolean;
  id: string;
};

const todos: Array<TODO> = [];

form.onsubmit = (e) => {
  e.preventDefault();
  const todo: TODO = {
    task: input.value,
    isComplete: false,
    id: String(Math.random() * 1000),
  };
  todos.unshift(todo);
  input.value = "";
  renderTask(todos);
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
};

const create = (task: string, isComplete: boolean, id: string) => {
  const div: HTMLDivElement = document.createElement("div");
  div.className = "flex justify-between py-2 items-center gap-4";

  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = `${task}`;

  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "checkbox rounded-full checkbox-primary";
  checkbox.checked = isComplete;

  checkbox.onchange = () => {
    paragraph.className = checkbox.checked
      ? "line-through font-medium"
      : "font-medium";
  };

  const delBtn: HTMLButtonElement = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "btn btn-circle btn-error";

  delBtn.onclick = () => {
    deleteHandler(id);
  };

  div.append(checkbox, paragraph, delBtn);
  container.append(div);
};

const deleteHandler = (id: string) => {
  const del = todos.findIndex((d) => d.id === id);
  todos.splice(del, 1);
  renderTask(todos);
};

const renderTask = (todos: TODO[]) => {
  container.innerText = "";
  //   const todo = localStorage.getItem("todos");
  //   const to = JSON.parse(todo);
  todos.forEach((item) => {
    create(item.task, item.isComplete, item.id);
  });
};
