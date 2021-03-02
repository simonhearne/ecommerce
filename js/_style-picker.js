(function() {
	"use strict";
	let els = document.querySelectorAll(".style-picker > div");
	for (let el of els) {
		el.addEventListener("click",e => {
			let el = e.currentTarget;
			let id = el.dataset.itemId;
			let parent = el.parentElement.parentElement;
			let children = parent.querySelectorAll('.style');
			for (let child of children) {
				if (child.dataset.itemId === id) {
					child.style.display = 'block';
				} else {
					child.style.display = 'none';
				}
			}
		})
	}
})();
