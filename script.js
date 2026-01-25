const inputbox = document.getElementById("inputbox");
const licont = document.getElementById("licont");


document.addEventListener("DOMContentLoaded",()=>{
    showsavedtodo();
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    },3000);
}); 


inputbox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
});

function addtask() {
    if (inputbox.value.trim() === "") {
        alert("Please write something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputbox.value;

    let span = document.createElement("span");
    span.textContent = "\u00d7";

    li.appendChild(span);
    licont.appendChild(li);

    inputbox.value = "";
    savetodo();
}

licont.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savetodo();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savetodo();
    }
});

function savetodo() {
    localStorage.setItem("localdata", licont.innerHTML);
}

function showsavedtodo() {
    licont.innerHTML = localStorage.getItem("localdata") || "";
}

document.addEventListener("DOMContentLoaded", showsavedtodo);


