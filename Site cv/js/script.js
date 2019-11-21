function menu(event){
		var isactive = event.parentElement.parentElement.querySelector('.active');
		if(isactive != null)
			isactive.classList.remove("active");
		event.classList.add("active");
	};