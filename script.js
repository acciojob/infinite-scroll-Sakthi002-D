const list = document.getElementById("list");
let count = 1;

function addItem() {
    const li = document.createElement("li");
    li.textContent = `Todo Item ${count++}`;
    list.appendChild(li);
}

for (let i = 0; i < 2; i++) {
    addItem();
}

list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItem();
        addItem();
    }
});