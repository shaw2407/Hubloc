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
        menuPrice: 550,
        menuImage: "./assets/products/menu/pork-menu/pork-shanghai.jpg"
    },
    {
        menuName: "sisig liempo",
        menuPrice: 750,
        menuImage: "./assets/products/menu/pork-menu/sisig-liempo.jpg"
    },
    {
        menuName: "sisig pisngi",
        menuPrice: 750,
        menuImage: "./assets/products/menu/pork-menu/sisig-pisngi.jpg"
    },
    {
        menuName: "grilled liempo",
        menuPrice: 850,
        menuImage: "./assets/products/menu/pork-menu/grilled-liempo.jpg"
    },
    {
        menuName: "pork kare-kare",
        menuPrice: 875,
        menuImage: "./assets/products/menu/pork-menu/pork-kare-kare.jpg"
    },
    {
        menuName: "bicol express",
        menuPrice: 775,
        menuImage: "./assets/products/menu/pork-menu/bicol-express.jpg"
    },
    {
        menuName: "dinuguan",
        menuPrice: 750,
        menuImage: "./assets/products/menu/pork-menu/dinuguan.jpg"
    },
    {
        menuName: "litson kawali",
        menuPrice: 1060,
        menuImage: "./assets/products/menu/pork-menu/letchon-kawali.jpg"
    },
    {
        menuName: "chicharon bulaklak",
        menuPrice: 940,
        menuImage: "./assets/products/menu/pork-menu/chicharon-bulaklak.jpg"
    }
    
]

const menuBeef = [
    {
        menuName: "beef kaldereta",
        menuPrice: 1000,
        menuImage: "./assets/products/menu/beef-menu/beef-kaldereta.jpg"
    },
    {
        menuName: "beef kare-kare",
        menuPrice: 1250,
        menuImage: "./assets/products/menu/beef-menu/beef-kare-kare.jpg"
    },
    {
        menuName: "bistek",
        menuPrice: 925,
        menuImage: "./assets/products/menu/beef-menu/beef-bistek.jpg"
    },
    {
        menuName: "beef papaitan",
        menuPrice: 575,
        menuImage: "./assets/products/menu/beef-menu/beef-papaitan.jpg"
    }   
]

const menuFish = [
    {
        menuName: "sisig bangus",
        menuPrice: 925,
        menuImage: "./assets/products/menu/fish-menu/sisig-bangus.jpg"
    },
    {
        menuName: "calamares",
        menuPrice: 775,
        menuImage: "./assets/products/menu/fish-menu/calamares.jpg"
    },
    {
        menuName: "binusog na pusit",
        menuPrice: 850,
        menuImage: "./assets/products/menu/fish-menu/binusog-na-pusit.jpg"
    },
    {
        menuName: "spicy pusit",
        menuPrice: 850,
        menuImage: "./assets/products/menu/fish-menu/spicy-pusit.jpg"
    },
    {
        menuName: "baked tahong",
        menuPrice: 850,
        menuImage: "./assets/products/menu/fish-menu/baked-tahong.jpg"
    },
    {
        menuName: "tempura",
        menuPrice: 1250,
        menuImage: "./assets/products/menu/fish-menu/tempura.jpg"
    },
    {
        menuName: "garlic butter shrimp",
        menuPrice: 1250,
        menuImage: "./assets/products/menu/fish-menu/garlic-butter-shrimp.jpg"
    },
    {
        menuName: "seafood kare-kare",
        menuPrice: 1250,
        menuImage: "./assets/products/menu/fish-menu/seafood-kare-kare.jpg"
    },
    {
        menuName: "fish fillet",
        menuPrice: 850,
        menuImage: "./assets/products/menu/fish-menu/fish-fillet.jpg"
    },
    {
        menuName: "fish & fries",
        menuPrice: 750,
        menuImage: "./assets/products/menu/fish-menu/fish-fries.jpg"
    }
]

const menuChicken = [
    {
        menuName: "chicken skin",
        menuPrice: 400,
        menuImage: "./assets/products/menu/chicken-menu/chicken-skin.jpg"
    },
    {
        menuName: "fries",
        menuPrice: 440,
        menuImage: "./assets/products/menu/chicken-menu/chicken-fries.jpg"
    },
    {
        menuName: "isaw",
        menuPrice: 440,
        menuImage: "./assets/products/menu/chicken-menu/isaw.jpg"
    },
    {
        menuName: "chicken curry",
        menuPrice: 850,
        menuImage: "./assets/products/menu/chicken-menu/chicken-curry.jpg"
    },
    {
        menuName: "chicken wings",
        menuPrice: 850,
        menuImage: "./assets/products/menu/chicken-menu/chicken-wings.jpg"
    }
]

const menuVegetables = [
    {
        menuName: "pinakbet",
        menuPrice: 700,
        menuImage: "./assets/products/menu/vegetable-menu/pinakbet.jpg"
    },
    {
        menuName: "chopsuey",
        menuPrice: 775,
        menuImage: "./assets/products/menu/vegetable-menu/chop-suey.jpg"
    },
    {
        menuName: "sizzling tofu",
        menuPrice: 550,
        menuImage: "./assets/products/menu/vegetable-menu/sizzling-tofu.jpg"
    },
    {
        menuName: "tokwa't baboy",
        menuPrice: 675,
        menuImage: "./assets/products/menu/vegetable-menu/tokwat-baboy.jpg"
    }
]

const menuDessert = [
    {
        menuName: "halo-halo w/ ice cream",
        menuPrice: 80,
        menuImage: "./assets/products/menu/desserts-menu/halo-halo-ice-cream.jpg"
    },
    {
        menuName: "blueberry cheesecake",
        menuPrice: 95,
        menuImage: "./assets/products/menu/desserts-menu/blueberry-cheesecake.jpg"
    },
    {
        menuName: "leche flan",
        menuPrice: 90,
        menuImage: "./assets/products/menu/desserts-menu/leche-flan.jpg"
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
            <img src="${food.menuImage}">
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