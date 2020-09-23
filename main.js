const nav = document.querySelector('[data-nav]');
const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const servingsMenu = document.querySelector('.servings-meanu');
const bookBox = document.querySelector('.book-now-box');
const bookPeople = document.getElementById("book-people");
const bookClose = document.querySelector('.book-close');
const bookNowBtn = document.querySelector('.call-action-2');
const orderNowBtn = document.querySelector('.call-action-1');
const peopleSelect = document.querySelector('.people-select');
const peopleOptionList = document.querySelector('.people-option-list');
const dataPerson = document.querySelectorAll('[data-person]');
const peopleDefaultOption = document.querySelector('.people-default-option');
const dateDefaultPick = document.querySelector('.date-default-pick');
const datePickerList = document.querySelector('.date-picker-list');
const dateSelect = document.querySelector('.date-select');
const formSelect = document.querySelector('.form-select');
const timeSelect = document.querySelector('.time-select');
const timePickerList = document.querySelector('.time-picker-list');
const dataTime = document.querySelectorAll('[data-time]');
const timeDefaultPick = document.querySelector('.time-default-pick');


// nav nav nav nav nav nav nav nav nav nav nav nav


menuOpen.addEventListener('click', () => nav.classList.toggle('open-nav'));

menuClose.addEventListener('click', () => nav.classList.toggle('open-nav'));



// booking booking booking booking booking booking booking



const nPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if(bookNowBtn){
    bookNowBtn.addEventListener('click', () => {
        bookBox.style.display="flex";
        document.body.style.overflow="hidden";
        // disableScroll();
    });
}

if(bookClose){
    bookClose.addEventListener('click', () =>{
        bookBox.style.display="none";
        document.body.style.overflow="initial";
        // enableScroll();
    });
}


peopleSelect.addEventListener('click', () =>{
    peopleOptionList.classList.toggle("active");
})

// function changeDefaultPerson(newPvalue){
//     peopleDefaultOption.innerHTML=`${newPvalue} Person`;
//     peopleOptionList.classList.toggle("active");
// }

dataPerson.forEach(dataPerson =>{
    dataPerson.addEventListener('click', () =>{
        // changeDefaultPerson(dataPerson.value);
        peopleDefaultOption.innerText=`${dataPerson.value} Person`;
        peopleOptionList.classList.toggle('active');
    })
})      

// Selecting number of people ends here

function disableScroll() { 
    // Get the current page scroll position 
    
    scrollTop =  
      window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft =  
      window.pageXOffset || document.documentElement.scrollLeft, 

        // if any scroll is attempted, 
        // set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 


function enableScroll() { 
    window.onscroll = function() {}; 
} 

// End of disable and enable scrollbar






const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];


let getDaysInMonth = function(month, year){
    return new Date(year, month, 0).getDate();
}

dateSelect.addEventListener('click', ()=>{
    datePickerList.classList.toggle("active");
    monthPreview.innerText=months[monthToday];
}) 

let monthToday = new Date().getMonth();
let yearToday = new Date().getFullYear();
let dateToday = new Date().getDate();
let numberOfDays = getDaysInMonth(12, yearToday);
let currentDay = `${monthToday+1}/${dateToday}/${yearToday}`;
dateDefaultPick.innerText=currentDay;
const monthPreview = document.querySelector('[data-month-now]');
const prevMonth = document.querySelector('[data-month-prev]');
const nextMonth = document.querySelector('[data-month-next]');
const dateDay = document.querySelectorAll('[data-day]');



for (let index = 1; index <= numberOfDays; index++) {
    let day = document.createElement('li');
    day.classList.add('date-day');
    day.value=index;
    day.setAttribute('data-day',''); 
    day.innerText=index;
    datePickerList.appendChild(day);
    day.addEventListener('click', ()=>{
        displayCurrentDay(day.value);
    })
}

function daysList(number){
    for (let index = 1; index <= number; index++) {
        const day = document.createElement('li');
        day.classList.add('date-day');
        day.setAttribute('data-day',''); 
        day.value=index;
        day.innerText=index;
        datePickerList.appendChild(day);
        day.addEventListener('click', ()=>{
            displayCurrentDay(day.value);
        })
    }
};


function clearDates(){
    while (datePickerList.childElementCount != 1) {
        datePickerList.removeChild(datePickerList.lastChild);
    }
};


prevMonth.addEventListener('click', ()=>{
    months[monthToday--];
    if(monthToday<0){
        monthToday=months.length-1;
    }
    monthPreview.innerText=months[monthToday];
    clearDates();
    daysList(getDaysInMonth(monthToday+1, yearToday));
});


nextMonth.addEventListener('click', ()=>{
    monthToday++;
    if(monthToday==months.length){
        monthToday = 0;
    };
    monthPreview.innerText=months[monthToday];
    clearDates();
    daysList(getDaysInMonth(monthToday+1, yearToday));
})


function displayCurrentDay(value){
    dateToday=value;
    currentDay = `${monthToday+1}/${dateToday}/${yearToday}`;
    dateDefaultPick.innerText=currentDay;
    datePickerList.classList.toggle("active");
}

// Selecting the date ends here


timeSelect.addEventListener('click', () =>{
    timePickerList.classList.toggle("active");
})

dataTime.forEach(dataTime =>{
    dataTime.addEventListener('click', ()=>{
        timeDefaultPick.innerText=dataTime.innerText;
        timePickerList.classList.toggle("active");
    })
})



// Selecting time ends here
