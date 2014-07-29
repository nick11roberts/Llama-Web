function clickEvent(){
	var vertRand = Math.round(Math.random() * 86);//these adjustments are based on image proportions... 
    var horizRand = Math.round(Math.random() * 96);
    
    
    var llama= document.createElement('img');
    
    llama.src= 'default_images/actualLlama.png';
    llama.alt= 'Llama.';
    llama.title= 'llama';
    llama.className= 'llama';
    
    
    llama.style.top = vertRand + "%"; //may adjust this if image sizes change...
    llama.style.left = horizRand + "%";
    
    document.body.appendChild(llama);
}

function buttonSize(){
	var button = document.getElementById('button');
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	if (windowWidth >= windowHeight){
		button.style.width = '20%';
	}
	else{
		button.style.height = '20%';
	}
	
}


