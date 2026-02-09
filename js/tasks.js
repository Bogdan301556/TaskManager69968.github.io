
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const logoutBtn = document.getElementById("logoutBtn");
const userStatus = document.getElementById("userStatus");


const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "login.html";
} else {
  userStatus.textContent = "Jesteś zalogowany ✅";
  userStatus.style.color = "green";
}


logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});


async function loadTasks() {
  const res = await fetch("http://localhost:5000/api/tasks", {
    headers: { Authorization: token }
  });
  const tasks = await res.json();

  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const del = document.createElement("button");
    del.textContent = "X";
    del.onclick = () => deleteTask(task._id);

    li.appendChild(del);
    taskList.appendChild(li);
  });
}

async function addTask() {
  if (taskInput.value.trim() === "") return;

  await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({ text: taskInput.value })
  });

  taskInput.value = "";
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
    headers: { Authorization: token }
  });
  loadTasks();
}

addBtn.addEventListener("click", addTask);

loadTasks();

const loginBtn = document.getElementById("loginBtn");

if (token) {
  // Пользователь вошёл
  loginBtn.style.display = "none"; 
  logoutBtn.style.display = "inline-block"; 
} else {
  // Пользователь не вошёл
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
}
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token"); 
  loginBtn.style.display = "inline-block"; 
  logoutBtn.style.display = "none"; 
  window.location.href = "login.html";
});
