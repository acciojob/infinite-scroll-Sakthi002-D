//your code here!
const list = document.getElementById("list");
let count = 1;

function addItem() {
	const li = document.createElement("li");
	li.textContent =`Item ${count++}`;
	list.appendChild(li);
}

fo(let i = 0; i < 10; i++){
	addItem();
}

list.addEventListner("scroll", () =>  {
	if(
		list.scrollTop + list.clientHeight >=
		list.scrollHeight
	) {
		addItem();
		addItem();
	}
});