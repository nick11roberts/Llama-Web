function clickEvent(){

	var windowWidth = window.innerWidth;
  	var windowHeight = window.innerHeight;

	var vertRand;
  	var horizRand;
  	var rotationRand;

  	var llama= document.createElement('img');

  	llama.src= 'default_images/actualLlama.png';
  	llama.alt= 'Llama.';
  	llama.title= 'llama';
  	llama.className= 'llama';

	if (windowWidth >= windowHeight){
		llama.style.width = '4%';
	}
	else{
		llama.style.height = '16%';
	}

	vertRand= Math.random()*(windowHeight);
  	horizRand= Math.random()*(windowWidth);
  	rotationRand= Math.random()* 360;



  	llama.style.top= vertRand + "px";
  	llama.style.left= horizRand + "px";
  	llama.style.transform= "rotate(" + rotationRand + "deg)";

  	document.body.appendChild(llama);


}



function buttonSize(){
	var button = document.getElementById('button');
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var buttonSize = 20;

	if (windowWidth >= windowHeight){
		button.style.width = buttonSize + '%';
	}
	else{
		button.style.height = buttonSize + '%';
	}

}
