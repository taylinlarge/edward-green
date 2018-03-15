// console.log(shoes);
var theseShoes = [];
var shoeNames = [];
var activeShoes = [];
function template(shoe) {
	theseShoes.push(shoe);
	return (
		`
		<div class="gallery-item">
			<div class="item-image"><img src="${shoe.link}"></div>
			<h1>${shoe.name}</h1>
			<p>${shoe.description}</p>
			<p>${shoe.price}</p>
			<button type="button">SELECT</button>
		</div>
		`
	)
}
function populateNameList (shoe) {
	if(shoeNames.indexOf(shoe.name) === -1) {
		shoeNames.push(shoe.name);
	}
}
function populateFilter (shoeNames) {
	let filter = document.querySelector('.filter');
	for (var i = shoeNames.length - 1; i >= 0; i--) {
		filter.innerHTML += `
			<div class="filterEntry">
				<div class="checkbox">
					<i class="fas fa-check checkbox-check"></i>
				</div>
				<p class="filterName">${shoeNames[i]}</p>
			</div>	
		`
	}
}
function filterResults(checkbox, checkboxes) {
	let shoeNodes = document.querySelectorAll('.gallery-item');
	if(checkbox.classList.contains('checked')) {
		for (var i = shoeNodes.length - 1; i >= 0; i--) {
			if(shoeNodes[i].children[1].innerHTML === checkbox.parentNode.children[1].innerHTML) {
				shoeNodes[i].classList.remove('hide');
				shoeNodes[i].classList.add('active');
			} else {
				shoeNodes[i].classList.add('hide');
				shoeNodes[i].classList.remove('active');
			}
		}
		let activeShoe = document.querySelectorAll('.gallery-item.active');
		TweenMax.staggerFromTo(activeShoe, 0.3, {opacity: 0, top: "-20px"}, {opacity: 1, top: 0}, 0.1);
	}
}

document.querySelector('.filter').addEventListener('click',function(e) {
	if(e.target.classList.contains('checkbox')) {
		for (var i = this.children.length - 1; i >= 0; i--) {
			this.children[i].children[0].classList.remove('checked');
		}
		e.target.classList.add('checked');
		e.target.classList.add('active');
		filterResults(e.target, this.children)
	}
})

let gallery = document.querySelector('.gallery');
let galleryItems = ''
for (var i = shoes.length - 1; i >= 0; i--) {
	console.log(shoes[i].name);
	populateNameList(shoes[i]);
	galleryItems += template(shoes[i]);
}
gallery.innerHTML = galleryItems;
populateFilter(shoeNames);

