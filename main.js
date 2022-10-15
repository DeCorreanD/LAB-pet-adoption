const pets = [
	{
		id: 1,
		name: "Dusty",
		color: "Green",
		specialSkill: "Gives sincere apologies.",
		type: "Cat",
		imageUrl:
			"http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
	},
	{
		id: 2,
		name: "Trouble",
		color: "Brown",
		specialSkill:
			"Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
		type: "Dino",
		imageUrl: "https://m.media-amazon.com/images/I/41qa+aEz7cS._AC_SY350_.jpg",
	},
	{
		id: 3,
		name: "Whiskers",
		color: "Yellow",
		specialSkill: "Can prove he is a real man by drinking whiskey.",
		type: "Dino",
		imageUrl:
			"https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
	},
	{
		id: 4,
		name: "Coco",
		color: "Black",
		specialSkill: "Burps minimally.",
		type: "Dog",
		imageUrl:
			"http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
	},
	{
		id: 5,
		name: "Spooky",
		color: "Brown",
		specialSkill: "Comfortable in the outdoors for up to eight hours.",
		type: "Cat",
		imageUrl:
			"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
	},
	{
		id: 6,
		name: "Tiger",
		color: "Black",
		specialSkill: "Can read (but cannot understand) Hebrew.",
		type: "Dog",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
	},
	{
		id: 7,
		name: "Oreo",
		color: "Yellow",
		specialSkill: "Able to stop chewing ice or whistling on request.",
		type: "Cat",
		imageUrl:
			"https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
	},
	{
		id: 8,
		name: "Ginger",
		color: "Grey",
		specialSkill: "Comfortable in the outdoors for up to eight hours.",
		type: "Dino",
		imageUrl:
			"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6506/6506147_sd.jpg;maxHeight=640;maxWidth=550",
	},
	{
		id: 9,
		name: "Sassy",
		color: "Brown",
		specialSkill: "Adept at talking self and others out of fights.",
		type: "Cat",
		imageUrl:
			"https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
	},
	{
		id: 10,
		name: "Sammy",
		color: "Blue",
		specialSkill: "Listens attentively to boring stories.",
		type: "Cat",
		imageUrl:
			"https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
	},
	{
		id: 11,
		name: "Coco",
		color: "Orange",
		specialSkill: "Can be around food without staring creepily at it.",
		type: "Dino",
		imageUrl:
			"https://i.etsystatic.com/23384595/r/il/d85d32/3673785703/il_570xN.3673785703_msem.jpg",
	},
	{
		id: 12,
		name: "Buster",
		color: "Green",
		specialSkill: "Does not use excessive acronyms.",
		type: "Dog",
		imageUrl:
			"https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
	},
	{
		id: 13,
		name: "Chester",
		color: "Red",
		specialSkill:
			"Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
		type: "Dog",
		imageUrl:
			"http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
	},
	{
		id: 14,
		name: "Samantha",
		color: "Brown",
		specialSkill: "Always up for dessert.",
		type: "Cat",
		imageUrl:
			"http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
	},
	{
		id: 15,
		name: "Coco",
		color: "Red",
		specialSkill: "Burps minimally.",
		type: "Cat",
		imageUrl:
			"http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
	},
	{
		id: 16,
		name: "Smokey",
		color: "Brown",
		specialSkill: "Drives at a safe rate of speed in snow or rain.",
		type: "Dino",
		imageUrl:
			"https://archives.bulbagarden.net/media/upload/thumb/4/4e/115Kangaskhan.png/250px-115Kangaskhan.png",
	},
	{
		id: 17,
		name: "Muffin",
		color: "Yellow",
		specialSkill:
			"Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
		type: "Cat",
		imageUrl:
			"https://www.eightieskids.com/wp-content/uploads/2020/09/12-15.jpg",
	},
	{
		id: 18,
		name: "Salem",
		color: "Brown",
		specialSkill: "Proficient in air guitar",
		type: "Dino",
		imageUrl:
			"https://images.clipartof.com/small/1521216-3d-Brown-T-Rex-Dinosaur-Playing-A-Guitar-On-A-White-Background-Poster-Art-Print.jpg",
	},
	{
		id: 19,
		name: "Callie",
		color: "Blue",
		specialSkill: "Listens attentively to boring stories.",
		type: "Dog",
		imageUrl: "https://pictures.abebooks.com/isbn/9781584790136-us.jpg",
	},
	{
		id: 20,
		name: "Spooky",
		color: "Black",
		specialSkill: "Uses litter box at appropriate hours.",
		type: "Cat",
		imageUrl:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-cat-breeds-american-shorthair-1647914093.jpeg?crop=1xw:1xh;center,top&resize=480:*",
	},
	{
		id: 21,
		name: "Miss kitty",
		color: "Red",
		specialSkill: "Owns a Nintendo Power Glove.",
		type: "Dino",
		imageUrl:
			"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wzf8fjgkxdiriqebqvxb",
	},
	{
		id: 22,
		name: "Snuggles",
		color: "Orange",
		specialSkill: "Is comfortable with jokes about his receding hairline.",
		type: "Cat",
		imageUrl:
			"https://t3.ftcdn.net/jpg/00/98/10/96/360_F_98109616_zZjyj1SF7bLZ1Je8UXTVbocew0PcwXol.jpg",
	},
	{
		id: 23,
		name: "Buddy",
		color: "Red",
		specialSkill: "Enjoys fine wine.",
		type: "Dog",
		imageUrl:
			"http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
	},
	{
		id: 24,
		name: "George",
		color: "Brown",
		specialSkill:
			"Participates in karaoke but does not force others to go out to karaoke.",
		type: "Dog",
		imageUrl:
			"https://topdogtips.com/wp-content/uploads/2020/11/shutterstock_292741550.jpg",
	},
	{
		id: 25,
		name: "Salem",
		color: "Red",
		specialSkill: "Knows the words to 4 rap songs.",
		type: "Cat",
		imageUrl: "https://image.posterlounge.com/images/big/1873723.jpg",
	},
	{
		id: 26,
		name: "Bubba",
		color: "Yellow",
		specialSkill: "Cleans himself.",
		type: "Dog",
		imageUrl:
			"https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
	},
	{
		id: 27,
		name: "Chloe",
		color: "Green",
		specialSkill: "Admits he is wrong",
		type: "Dino",
		imageUrl:
			"https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
	},
	{
		id: 28,
		name: "Nala",
		color: "Purple",
		specialSkill: "Dances when he has to.",
		type: "Cat",
		imageUrl:
			"https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
	},
	{
		id: 29,
		name: "Oscar",
		color: "Green",
		specialSkill:
			"Gives hugs with appropriate pressure and for the right length of time.",
		type: "Cat",
		imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
	},
	{
		id: 30,
		name: "Lucy",
		color: "Red",
		specialSkill: "Doesn’t get weirded out by the word “moist.”",
		type: "Dino",
		imageUrl:
			"https://i.pinimg.com/236x/23/c3/1f/23c31f2e36d906800c5f5943e397ee51.jpg",
	},
];

const renderToDom = (divId, htmlToRender) => {
	const selectedDiv = document.querySelector(divId);
	selectedDiv.innerHTML = htmlToRender;
};
const cardOnDom = (pets) => {
	let domString = "";
	for (const pet of pets) {
		domString += `<div class="card" style="width: 18rem;">
<h5 class="card-title">${pet.name}</h5>
  <img src=${pet.imageUrl} class="card-img-top>
  <div class="card-body">
    <p class="card-title">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
    <p class="card-pet ${pet.type}">${pet.type}</p>
    
  </div>
</div>`;
	}
	renderToDom("#app", domString);
};

cardOnDom(pets);

const filter = (array, petStyle) => {
	const petArray = [];

	for (const pet of array) {
		if (pet.type === petStyle) {
			petArray.push(pet);
		}
	}

	return petArray;
};

const catButton = document.querySelector("#Cats");
const dogButton = document.querySelector("#Dogs");
const dinosButton = document.querySelector("#Dinos");
const showAllButton = document.querySelector("#All-Pets");

catButton.addEventListener("click", () => {
	const kittys = filter(pets, "Cat");
	cardOnDom(kittys);
});

dogButton.addEventListener("click", () => {
	const doggy = filter(pets, "Dog");
	cardOnDom(doggy);
});

dinosButton.addEventListener("click", () => {
	const trex = filter(pets, "Dino");
	cardOnDom(trex);
});

showAllButton.addEventListener("click", () => {
	cardOnDom(pets);
});
