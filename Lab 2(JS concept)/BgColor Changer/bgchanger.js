// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;

// red.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'purple';
// })

// How to write all these in a smaller code ?

//first we will select all the buttons using querselectorall









// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         // No quotes are used because button.id is a variable (property) that already contains a string. 
//         body.style.backgroundColor = button.id;
//     })
// })

//But still there is a problem with the above line of code.
//the reason is that : here 5 buttons so 5 event listeners but what is there are n buttons ? then there  will obviously be n event listeners.
//this uses memory and adds overhead as the browser has to store each listener separately.

// Problem 2: Dynamic elements don’t work automatically
//If later we add a button dynamically:
// const btn = document.createElement('button');
// btn.id = 'black';
// btn.textContent = 'Black';
// document.body.appendChild(btn);
//It won’t work because 
// The listener was added only to existing buttons
// New button has no listener


//So, the most optimized way is: Here,we assigned eventlistener to root (parent) of all buttons and h1 tag. when clicked on 
//any of the child, event will bubble to reach its parent. We want to trigger only when BUTTON tag is clicked so we specified condition.
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id; 
})