const app = new Vue(
    {
        el:".container-blur",
        data:{
            arrImages: [
                {
                    image: '01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: '02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: '03.webp',
                    title: 'Fortnite',
                    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                },
                {
                    image: '04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: '05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],
            timeSlider: 1.5 * 1000, 
            direction: 1,
            activeIndex: 0,
            idInterval:0,
            isAutoplayActive: true,      
        },
        methods:{
            changeSlide(direction){
                if (direction > 0) {
                    this.activeIndex++
                }
                else{
                    this.activeIndex--
                }
            }
            
        }
    
})

const timeSlider = 1.5 * 1000;
let direction = 1;

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');


// aggiungere click ai thumb
document.querySelectorAll('.thumb-img').forEach((eleThumb, index) => {
	eleThumb.addEventListener('click', () => {
		listEleImg[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		activeIndex = index;
		listEleImg[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
		document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	})
});



document.querySelector('.btn-invert').addEventListener('click', () => direction *= -1); // 1  * -1 = -1; -1 * -1 = 1

document.querySelector('.btn-start-stop').addEventListener('click', function() {
	if (this.dataset.functionality === 'stop') {
		console.log('stoppato');
		clearInterval(idInterval);
		this.innerHTML = 'Start';
		this.dataset.functionality = 'start';
	} else {
		console.log('avviato');
		idInterval = setInterval(() => {
			if (direction > 0) {
				moveRight();
			} else {
				moveLeft();
			}
		}, timeSlider);
		this.innerHTML = 'Stop';
		this.dataset.functionality = 'stop';
	}
})

