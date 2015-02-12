function deleteLlamas() {
	var llamas = document.getElementsByClassName("llama");
	while (llamas.length > 0) {
		for (var i = 0; i < llamas.length; i++) {
			llamas[i].remove();
		}	
	}
};