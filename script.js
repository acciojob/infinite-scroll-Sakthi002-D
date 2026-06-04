//your code here!

let count = 1;


fo(let i = 0; i < 10; i++){
	addItem();
}


container.addEventListner("scroll", () =>  {
	if(
		container.scrollTop + container.clientHeight >=
		container.scrollHeight
	) {
		addItem();
		addItem();
	}
});