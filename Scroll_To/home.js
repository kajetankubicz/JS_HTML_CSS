const navigation = document.querySelector('nav');
const links = document.querySelector('ul');
const footer = document.querySelector('footer');
const topLink = document.querySelector('.top-link')
const scrollLinks = document.querySelectorAll('.scroll-link')

const logoContainer = document.querySelector('.logo-container');
const toggleButton = document.createElement('button');
toggleButton.className = 'toggle-menu';
toggleButton.innerHTML = '&#9776;';
logoContainer.appendChild(toggleButton);

toggleButton.onclick = function(){
	navigation.classList.toggle('show-nav');
	links.classList.toggle('show-links');
}

let nowDate = new Date();
let currentYear = nowDate.getFullYear();

const footerText = document.createElement('h3');
footerText.textContent = `${currentYear}. Have Fun.`;
footer.appendChild(footerText);

window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset;
	if(scrollHeight > 500){
		topLink.classList.add('show-link')
	}else{
		topLink.classList.remove('show-link')
	}
})

scrollLinks.forEach(elem=>{
	elem.onclick = function(e){
		e.preventDefault();
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);
		let position = element.offsetTop;
		window.scrollTo({
			left:0,
			top: position,
		});
	};
});