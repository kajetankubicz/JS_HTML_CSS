const mainSection = document.querySelector('.meals')
const btnContainer = document.querySelector('.buttons')

let meals = [
	{
		id: 1,
		photo: 'item-1.jpeg',
		name: 'buttermilk pancakes',
		price: 15.99,
		description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ',
		category: 'breakfast',
	},
	{
		id: 2,
		photo: 'item-2.jpeg',
		name: 'country delight',
		price: 20.99,
		description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ',
		category: 'breakfast',
	},
	{
		id: 3,
		photo: 'item-3.jpeg',
		name: 'bacon overflow',
		price: 8.99,
		description: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ',
		category: 'breakfast',
	},
	{
		id: 4,
		photo: 'item-4.jpeg',
		name: 'diner double',
		price: 13.99,
		description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ',
		category: 'lunch',
	},
	{
		id: 5,
		photo: 'item-5.jpeg',
		name: 'egg attack',
		price: 22.99,
		description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90\'s pop-up ',
		category: 'lunch',
	},
	{
		id: 6,
		photo: 'item-6.jpeg',
		name: 'american classic',
		price: 12.99,
		description: 'n it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut ',
		category: 'lunch',
	},
	{
		id: 7,
		photo: 'item-7.jpeg',
		name: 'godzilla milkshake',
		price: 6.99,
		description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. ',
		category: 'shakes',
	},
	{
		id: 8,
		photo: 'item-8.jpeg',
		name: 'oreo dream',
		price: 18.99,
		description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday ',
		category: 'shakes',
	},
	{
		id: 9,
		photo: 'item-9.jpeg',
		name: 'quarantine buddy',
		price: 16.99,
		description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ',
		category: 'shakes',
	},
	{
		id: 10,
		photo: 'item-10.jpeg',
		name: 'steak dinner',
		price: 39.99,
		description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ',
		category: 'dinner'

	},
]

window.addEventListener('DOMContentLoaded', function(){
	displayMenuItems(meals);
	filterer();
});

function displayMenuItems(arr){
	let displayMenu = arr.map(function(item){
		return `<div class="meal">
					<img src=${item.photo}>
					<div class="description">
						<div class="name-price">
							<h4>${item.name}</h4>
							<h5>${item.price}</h5>
						</div>
						<hr>
						<p>${item.description}</p>
					</div>
				</div>`;
	})
	displayMenu = displayMenu.join('');
	mainSection.innerHTML = displayMenu;
}

function filterer(){
	let allCategories = ['all'];
	for(let property of meals){
		allCategories.push(property.category);
	}
	let categoryBtns = [...new Set(allCategories)];

	const pageButtons = categoryBtns.map(function(category){
		return `<button class="btn" data-id="${category}">${category}</button>`
	}).join('')

	btnContainer.innerHTML = pageButtons;
	const btns = document.querySelectorAll('.btn')
	btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = meals.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(meals);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}


