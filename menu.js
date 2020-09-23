// NAV
const nav = document.querySelector('[data-nav]');
const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');

menuOpen.addEventListener('click', () => nav.classList.toggle('open-nav'));

menuClose.addEventListener('click', () => nav.classList.toggle('open-nav'));






const menuName = ["pork", "beef", "chicken", "seafood", "vegetable", "dessert"];

const menuPork = [
    {
        menuName: "pork shanghai",
        menuPrice: [550, 800]
    },
    {
        menuName: "sisig liempo",
        menuPrice: [750, 1050]
    },
    {
        menuName: "sisig pisngi",
        menuPrice: [750, 1050]
    },
    {
        menuName: "grilled liempo",
        menuPrice: [850, 1200]
    },
    {
        menuName: "pork kare-kare",
        menuPrice: [875, 1225]
    },
    {
        menuName: "bicol express",
        menuPrice: [775, 1085]
    },
    {
        menuName: "dinuguan",
        menuPrice: [750, 1050]
    },
    {
        menuName: "litson kawali",
        menuPrice: [1060, 1600]
    },
    {
        menuName: "chicharon bulaklak",
        menuPrice: [940, 1415]
    }
    
]

const menuBeef = [
    {
        menuName: "beef kaldereta",
        menuPrice: [1000, 1400]
    },
    {
        menuName: "beef kare-kare",
        menuPrice: [1250, 1750]
    },
    {
        menuName: "bistek",
        menuPrice: [925, 1290]
    },
    {
        menuName: "beef papaitan",
        menuPrice: [575, 820]
    },
    {
        menuName: "beef papaitan",
        menuPrice: [575, 820]
    },
    {
        menuName: "beef papaitan",
        menuPrice: [575, 820]
    },
    {
        menuName: "beef papaitan",
        menuPrice: [575, 820]
    }
]

const menuFish = [
    {
        menuName: "sisig bangus",
        menuPrice: [925, 1300]
    },
    {
        menuName: "calamares",
        menuPrice: [775, 1100]
    },
    {
        menuName: "binusog na pusit",
        menuPrice: [850, 1200]
    },
    {
        menuName: "spicy pusit",
        menuPrice: [850, 1200]
    },
    {
        menuName: "baked tahong",
        menuPrice: [850, 1200]
    },
    {
        menuName: "tempura",
        menuPrice: [1250, 1750]
    },
    {
        menuName: "garlic butter shrimp",
        menuPrice: [1250, 1750]
    },
    {
        menuName: "seafood kare-kare",
        menuPrice: [1250, 1750]
    },
    {
        menuName: "fish fillet",
        menuPrice: [850, 1190]
    },
    {
        menuName: "fish & fries",
        menuPrice: [750, 1050]
    }
]

const menuChicken = [
    {
        menuName: "chicken skin",
        menuPrice: [400, 580]
    },
    {
        menuName: "fries",
        menuPrice: [440, 580]
    },
    {
        menuName: "isaw",
        menuPrice: [440, 580]
    },
    {
        menuName: "chicken curry",
        menuPrice: [850, 1200]
    },
    {
        menuName: "chicken wings",
        menuPrice: [850, 1200]
    }
]

const menuVegetables = [
    {
        menuName: "pinakbet",
        menuPrice: [700, 980]
    },
    {
        menuName: "chopsuey",
        menuPrice: [775, 1085]
    },
    {
        menuName: "emperor vegetable",
        menuPrice: [875, 580]
    },
    {
        menuName: "sizzling tofu",
        menuPrice: [550, 770]
    },
    {
        menuName: "tokwat baboy",
        menuPrice: [675, 945]
    }
]

const menuDessert = [
    {
        menuName: "halo-halo w/ ice cream",
        menuPrice: 80
    },
    {
        menuName: "blueberry cheesecake",
        menuPrice: 95
    },
    {
        menuName: "leche flan",
        menuPrice: 90
    }
]

const menuContainer = document.querySelector('.menu-container');
const innerMenuContainer = document.querySelector('.inner-menu-container');
const menuContainerClose = document.querySelector('.menu-close-1');
const beef = document.querySelector('.beef-menu');
const pork = document.querySelector('.pork-menu');
const chicken = document.querySelector('.chicken-menu');
const fish = document.querySelector('.fish-menu');
const vegetable = document.querySelector('.vegetable-menu');
const dessert = document.querySelector('.dessert-menu');

menuContainerClose.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    document.body.style.overflow="initial";
});

function menuList(food){
    innerMenuContainer.innerHTML='';
    document.body.style.overflow="hidden";
    return `
    <li class="menu-item">
        <div class="food-img">
            <img src="./assets/products/menu/menu-pork.jpg">
        </div>
        <h1 class="food-name">${food.menuName}</h1>
        <h1 class="food-price">${food.menuPrice}</h1>
        <h1 class="food-addCart">add to cart</h1>
    </li>`
};

beef.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuBeef.map(menuList).join('');
});

pork.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuPork.map(menuList).join('');
});

chicken.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuChicken.map(menuList).join('');
});

fish.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuFish.map(menuList).join('');
});

vegetable.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuVegetables.map(menuList).join('');
});

dessert.addEventListener('click', () =>{
    menuContainer.classList.toggle("active");
    innerMenuContainer.innerHTML = menuDessert.map(menuList).join('');
});