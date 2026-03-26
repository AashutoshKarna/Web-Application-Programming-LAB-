const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
// function generateQuote (){
//     const text = document.getElementById("quote");
//   //math.rrandom give random value between 0 to 1 now if i multiply with quotes.length so it will go from 0 to 19 because there are 20 quotes
//     const index =Math.floor(Math.random()*quotes.length);
// //   text.textContent = quotes[1];
//     text.textContent = quotes[index];
// }

// setInterval(generateQuote,2000);

function bodycolor(){
const parbody = document.querySelector("body");
const r = Math.floor(Math.random() *256);
const g = Math.floor(Math.random() *256);
const b = Math.floor(Math.random() *256);
parbody.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
}
setInterval(bodycolor,2000);

function quotecontainercolor(){
const quotecontainer = document.querySelector(".quote-box");
const r = Math.floor(Math.random() *256);
const g = Math.floor(Math.random() *256);
const b = Math.floor(Math.random() *256);
quotecontainer.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`;
}
setInterval(quotecontainercolor,2000);

const btn  = document.querySelector('button');
btn.addEventListener('click',(event)=>{
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);
    // if(event.target==="Enter"){}
    const text = document.getElementById("quote");
    const index =Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
})
