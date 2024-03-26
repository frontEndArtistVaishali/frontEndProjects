
// selectors
const monthEle = document.querySelector(".date h1");
const fullDateEle = document.querySelector(".date p");
const daysEle = document.querySelector(".days"); 


// to select month index
const monthIndex = new Date().getMonth();
const monthsArray = [
    "January", "February", "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

// to get how many days are there in the current  month
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate(); 
    // console.log(lastDay);

// to get the first day of the current  month
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;  
    // console.log(firstDay);
// we are reducing the day index by one because in js days index start from sunday and in our case the calender has its first day as monday



// lets put month name in the calender using DOM
monthEle.innerText = monthsArray[monthIndex];
fullDateEle.innerText = new Date().toDateString();


// comong to the dates in the calender
let days = "";

// to empty the boxes before the month actually starts 
for(let i = firstDay; i > 0; i--){
    days += `<div class="empty"> </div>`;
}
// putting dates in the boxes untill the last day of the month and heighlighting the current day  
for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate()){
    days += `<div class="today"> ${i} </div>`;
    }
    else{
        days += `<div> ${i} </div>`;
    }
}

daysEle.innerHTML = days;