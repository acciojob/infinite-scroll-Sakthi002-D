const list = document.getElementById("infi-list");
let count = 1;

function addItem() {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
}

for (let i = 0; i < 2; i++) {
    addItem();
}

window.addEventListener("scroll", () => {
    if (
		element.scrollTop + element.clientHeight >= element.scrollHeight
	   ) {
        addItem();
        addItem();
    }
});