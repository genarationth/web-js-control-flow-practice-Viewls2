let dayNumber = Math.floor(Math.random()*9) //random day from 0-6(quantity of 7)
console.log(dayNumber); //should be number
if (dayNumber === 6) {
    console.log('Saturday');
}   else if (dayNumber === 5) {
    console.log('Friday');
}   else if (dayNumber === 4) {
    console.log('Thursday');
}   else if (dayNumber === 3) {
    console.log('Wednesday')
}   else if (dayNumber === 2) {
    console.log('Tuesday');
}   else if (dayNumber === 1) {
    console.log('Monday');
}   else if (dayNumber === 0) {
    console.log('Sunday');
}   else {
    console.log('Invalid day number');
}
