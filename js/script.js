window.addEventListener('load', function(){
	// document.body.style.backgroundColor='red'

class Slider{
	constructor(gallery){ 
		this.box = document.querySelector(gallery)
		this.images = this.box.querySelectorAll('img');
		this.btnPrev = this.box.querySelector('.prev');
		this.btnNext = this.box.querySelector('.next');
		this.i = 0;
		this.btnNext.addEventListener('click', () => {
			this.next()
			})
		this.btnPrev.addEventListener('click', () => {
			this.prev()
			})
	}
	
	start(){
		this.images[this.i].classList.add('showed');
	}
	stop(){
		console.log('2')
		this.images[this.i].classList.remove('showed');
	}

	next(){
		this.stop()
		this.i++;
		if(this.i >= this.images.length){
			this.i = 0;
		}
		this.start()
		}

	prev(){
		this.stop()
		this.i--;
		if(this.i < 0){
			this.i = this.images.length - 1;
		}
		this.start()
	}
}

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
// 	this.next()
// }) */


let slider1 = new Slider('.gallery-1');
console.log(slider1);
slider1.start()
console.log(images);

})