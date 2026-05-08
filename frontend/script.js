// const API = "http://localhost:5000/api";
const API = "teamtaskmanager-production-f7bb.up.railway.app/api";
async function signup() {
    await fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            role: document.getElementById("role").value
        })
    });
    alert("Signup Successful");
}

async function login() {
    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location = "dashboard.html";
}

async function createProject() {
    await fetch(`${API}/projects/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({
            name: projectName.value,
            description: projectDesc.value
        })
    });
    console.log(projectDesc.value)
    console.log(projectName.value)
    alert("Project Created");
}

async function createTask() {
    await fetch(`${API}/tasks/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({
            title: taskTitle.value,
            description: taskDesc.value
        })
    });
    alert("Task Created");
}
