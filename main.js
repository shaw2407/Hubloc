const nav = document.querySelector('[data-nav]');
const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const servingsMenu = document.querySelector('.servings-meanu');

menuOpen.addEventListener('click', function (){
    nav.classList.toggle('open-nav');
});

menuClose.addEventListener('click', function (){
    nav.classList.toggle('open-nav');
});










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
    }
]

const menuSeafood = [
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

