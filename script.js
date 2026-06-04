const list = document.getElementById("infi-list");
let count = 1;

function addItem() {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
}

for (let i = 0; i < 10; i++) {
    addItem();
}

window.addEventListener("scroll", () => {
    if (
		list.scrollTop + list.clientHeight >= list.scrollHeight
	   ) {
        addItem();
        addItem();
    }
});