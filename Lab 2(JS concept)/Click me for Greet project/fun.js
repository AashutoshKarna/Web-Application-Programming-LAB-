document.body.addEventListener('click', (event)=>{
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = 'Hi';
    document.body.appendChild(circle); 
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;

    const messages = ["Hi", "Hello", "Namaste", "Hola", "Ni Hao", "Bonjour", "Namaskar", "Vanakkam"];
    circle.textContent = messages[Math.floor(Math.random()*messages.length)]
    const color = ["red", "yellow", "orange", "green", "pink", "purple",  "maroon", "brown", "lemon", "wheat", "tomato", "azure"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)]
    setTimeout(()=>{
        circle.remove();
    },5000) 
})